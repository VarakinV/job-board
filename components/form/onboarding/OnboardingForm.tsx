'use client';
import { Card, CardContent } from '@/components/ui/card';
import Logo from '@/public/logo.png';
import Image from 'next/image';
import { useState } from 'react';
import { UserTypeSelection } from './UserTypeForm';
import { CompanyForm } from './CompanyForm';
import { JobSeekerForm } from './JobSeekerForm';

type UserSelectionType = 'company' | 'jobseeker' | null;

export function OnboardingForm() {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState<UserSelectionType>(null);

  function handleUserSelectionType(type: UserSelectionType) {
    setUserType(type);
    setStep(2);
  }

  function renderStep() {
    switch (step) {
      case 1:
        return <UserTypeSelection onSelect={handleUserSelectionType} />;
      case 2:
        return userType === 'company' ? <CompanyForm /> : <JobSeekerForm />;
      default:
        return null;
    }
  }

  return (
    <>
      <div className="flex items-center gap-4 mb-10">
        <Image src={Logo} alt="logo" width={50} height={50} />
        <h1 className="text-2xl font-bold">
          Job<span className="text-primary">Board</span>
        </h1>
      </div>
      <Card className="w-full max-w-lg">
        <CardContent className="p-6">{renderStep()}</CardContent>
      </Card>
    </>
  );
}
