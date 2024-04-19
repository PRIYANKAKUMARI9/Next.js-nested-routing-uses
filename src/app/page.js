'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router=useRouter();
  return (
    <main className="p-24">
      <h1 className=" mb-10 text-red-900">hello priyanka</h1>
      <Link href="\loginn">go to loging page</Link><br/><br/>
      <Link href="\aboutt">go to aboutt page</Link><br></br><br/>
      <button onClick={()=>router.push('/loginn')} className=" mt-9 bg-green-800 mr-5 rounded-xl p-5">go to loginn page btn</button>
      <button onClick={()=>router.push('/aboutt')} className=" mt-9 bg-red-800  rounded-xl p-5">go to aboutt page btn</button>

    </main>
  );
}
