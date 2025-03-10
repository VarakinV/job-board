import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/logo.png';
import { LoginForm } from '@/components/form/LoginForm';

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen w-screen">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link href="/" className="flex items-center gap-2 self-center">
          <Image src={Logo} alt="logo" className="size-10" />
          <h1 className="text-2xl font-bold ">
            Job<span className="text-primary">Board</span>
          </h1>
        </Link>
        <LoginForm />
      </div>
    </div>
  );
}
