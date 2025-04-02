
import { supabase } from '@/integrations/supabase/client';
import { toast } from "sonner";
import { RegisterData } from '@/types/userTypes';

export async function registerUser(data: RegisterData): Promise<boolean> {
  const { name, email, password, role, teacherEmail } = data;

  try {
    console.log(`Registering ${role} with email: ${email}, name: ${name}`);
    
    // First create the auth user
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { 
          name,
          role
        }
      }
    });

    if (authError) {
      toast.error(authError.message);
      return false;
    }

    // If it's a teacher, make sure to update the profile with role and empty students array
    if (role === 'teacher' && authData?.user) {
      const { error: updateError } = await supabase
        .from('profiles')
        .update({ 
          role: 'teacher',
          students: []
        })
        .eq('id', authData.user.id);

      if (updateError) {
        console.error("Error updating teacher profile:", updateError);
        toast.error("Registration incomplete: Failed to set teacher role");
        return false;
      }
      
      console.log("Teacher profile updated successfully");
    }
    
    // If the user provided a teacher email, add the student to that teacher's class
    if (teacherEmail && role === 'student' && authData?.user) {
      // Find the teacher profile by querying on auth user's email
      console.log("Searching for teacher with email:", teacherEmail);
      
      // Use an edge function to safely lookup users by email
      const { data: teacherData, error: teacherError } = await supabase.functions.invoke('get-user-by-email', {
        body: { email: teacherEmail }
      });
      
      if (teacherError || !teacherData) {
        console.error("Error finding teacher:", teacherError || "No teacher found");
        toast.warning("Registration successful, but couldn't link to teacher's class");
        return true;
      }
      
      const teacherId = teacherData.id;
      if (!teacherId) {
        console.error("Teacher not found with email:", teacherEmail);
        toast.warning("Registration successful, but teacher not found");
        return true;
      }
      
      console.log("Found teacher ID:", teacherId);
      
      // Now get the teacher profile using the auth user's ID
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('id, students')
        .eq('id', teacherId)
        .single();
      
      if (profileError || !profileData) {
        console.error("Error finding teacher profile:", profileError || "No teacher profile found");
        toast.warning("Registration successful, but couldn't link to teacher's class");
        return true;
      }
      
      console.log("Found teacher profile:", profileData);
      
      // Add the new student to the teacher's students array
      const students = [...(profileData.students || [])];
      if (!students.includes(authData.user.id)) {
        students.push(authData.user.id);
        
        // Update the teacher's profile
        const { error: updateError } = await supabase
          .from('profiles')
          .update({ students })
          .eq('id', profileData.id);
          
        if (updateError) {
          console.error("Error adding student to teacher's class:", updateError);
          toast.warning("Registration successful, but couldn't add you to teacher's class");
        } else {
          console.log("Student added to teacher's class successfully");
          toast.success("Registration successful! You've been added to your teacher's class.");
        }
      }
    }

    toast.success("Registration successful! Check your email for verification.");
    return true;
  } catch (error) {
    console.error("Error during registration:", error);
    toast.error("Registration failed");
    return false;
  }
}
