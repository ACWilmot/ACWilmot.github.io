
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Edit2, Check, X } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface EditableStudentNameProps {
  studentId: string;
  currentName: string;
  onNameUpdate: (newName: string) => void;
}

const EditableStudentName: React.FC<EditableStudentNameProps> = ({
  studentId,
  currentName,
  onNameUpdate,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(currentName);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleSave = async () => {
    if (!editName.trim()) {
      toast.error('Student name cannot be empty');
      return;
    }

    if (editName.trim() === currentName) {
      setIsEditing(false);
      return;
    }

    setIsUpdating(true);
    try {
      const { error } = await supabase
        .from('student_profiles')
        .update({ name: editName.trim() })
        .eq('id', studentId);

      if (error) {
        console.error('Error updating student name:', error);
        toast.error('Failed to update student name');
        return;
      }

      onNameUpdate(editName.trim());
      setIsEditing(false);
      toast.success('Student name updated successfully');
    } catch (error) {
      console.error('Error updating student name:', error);
      toast.error('Failed to update student name');
    } finally {
      setIsUpdating(false);
    }
  };

  const handleCancel = () => {
    setEditName(currentName);
    setIsEditing(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  if (isEditing) {
    return (
      <div className="flex items-center gap-2">
        <Input
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
          onKeyDown={handleKeyPress}
          className="h-8"
          disabled={isUpdating}
          autoFocus
        />
        <Button
          size="sm"
          variant="ghost"
          onClick={handleSave}
          disabled={isUpdating}
          className="h-8 w-8 p-0"
        >
          <Check className="h-4 w-4 text-green-600" />
        </Button>
        <Button
          size="sm"
          variant="ghost"
          onClick={handleCancel}
          disabled={isUpdating}
          className="h-8 w-8 p-0"
        >
          <X className="h-4 w-4 text-red-600" />
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <h3 className="font-medium">{currentName}</h3>
      <Button
        size="sm"
        variant="ghost"
        onClick={() => setIsEditing(true)}
        className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <Edit2 className="h-3 w-3" />
      </Button>
    </div>
  );
};

export default EditableStudentName;
