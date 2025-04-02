
import { fetchUserProfile } from './profileUtils';
import { resetSubjects } from './progressUtils';
import { registerUser } from './registrationUtils';
import { setupTestStudentTeacherRelationship } from './testSetupUtils';

// Export all the utilities from this central file to maintain the same API
export { 
  fetchUserProfile,
  resetSubjects,
  registerUser,
  setupTestStudentTeacherRelationship
};

// This function would need to be updated if we add the email column
export async function updateProfilesWithEmail(): Promise<void> {
  try {
    // This function is currently not applicable because the email field
    // doesn't exist in the profiles table schema.
    console.log("Cannot update profiles with email as the column doesn't exist in the schema.");
  } catch (error) {
    console.error('Error updating profiles with email:', error);
  }
}
