"use client";

import { useRouter } from 'next/navigation';
import Login from '@/components/login'

export default function Home() {
  const router = useRouter();
  const handleLoginSuccess = () => {
    router.push('/dashboard');
  }

  return (
    <>
      <div className="max-w-container">
        <Login onLoginSuccess={handleLoginSuccess}></Login>
      </div> 
    </>
  )
}
