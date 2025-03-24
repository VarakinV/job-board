import { Button } from '@/components/ui/button';
import { Building2, UserRound } from 'lucide-react';

type UserSelectionType = 'company' | 'jobseeker';

interface UserTypeSelectionProps {
  onSelect: (type: UserSelectionType) => void;
}

export function UserTypeSelection({ onSelect }: UserTypeSelectionProps) {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-semibold">Select your user type</h2>
        <p className="text-muted-foreground">
          Are you looking for a job, or are you looking to hire?
        </p>
      </div>
      <div className="grid gap-4">
        <Button
          onClick={() => onSelect('company')}
          variant="outline"
          className="w-full h-auto p-6 items-center gap-4 border-2 transition-all duration-200 hover:border-primary hover:bg-primary/5"
        >
          <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Building2 className="size-6 text-primary" />
          </div>
          <div className="text-left">
            <h3 className="text-lg font-semibold">Company / Organization</h3>
            <p className="text-muted-foreground">Post jobs and find talents</p>
          </div>
        </Button>
        <Button
          onClick={() => onSelect('jobseeker')}
          variant="outline"
          className="w-full h-auto p-6 items-center gap-4 border-2 transition-all duration-200 hover:border-primary hover:bg-primary/5"
        >
          <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
            <UserRound className="size-6 text-primary" />
          </div>
          <div className="text-left">
            <h3 className="text-lg font-semibold">Job Seeker</h3>
            <p className="text-muted-foreground">Find your dream job</p>
          </div>
        </Button>
      </div>
    </div>
  );
}
