"use client" // add this for client rendering and interactivity
import Image from "next/image";
import Header from "./header/header";
import { useRouter } from "next/navigation";




export default function Home() {
  const router = useRouter();

async function gotoLogin() {
router.push('/login')
}
async function gotoContact() {
router.push('/contact')
}

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <Header />

<div>
<button onClick={gotoLogin}>Login Page</button>
<button onClick={gotoContact}>Contact Page</button>
</div>

        
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          
          
        </div>
      </main>
    </div>
  );
}
