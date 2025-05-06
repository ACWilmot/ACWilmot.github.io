
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { School, Loader2 } from 'lucide-react';
import { useTeacher } from '@/context/TeacherContext';

const StudentClassCode: React.FC = () => {
  const { joinClassByCode } = useTeacher();
  const [classCode, setClassCode] = useState('');
  const [isJoining, setIsJoining] = useState(false);

  const handleJoinClass = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!classCode || classCode.length !== 5) return;
    
    setIsJoining(true);
    try {
      const success = await joinClassByCode(classCode);
      if (success) {
        setClassCode('');
      }
    } finally {
      setIsJoining(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Join a Class</CardTitle>
        <CardDescription>
          Enter a 5-digit class code provided by your teacher
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleJoinClass} className="space-y-4">
          <div className="flex items-center gap-2">
            <Input
              placeholder="Enter 5-digit code"
              value={classCode}
              onChange={(e) => {
                const input = e.target.value.replace(/\D/g, '').substring(0, 5);
                setClassCode(input);
              }}
              disabled={isJoining}
              required
              className="flex-1 text-center font-mono text-lg tracking-widest"
              maxLength={5}
            />
          </div>
          <Button 
            type="submit"
            disabled={isJoining || classCode.length !== 5}
            className="w-full"
          >
            {isJoining ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Joining...
              </>
            ) : (
              <>
                <School className="h-4 w-4 mr-2" />
                Join Class
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default StudentClassCode;
