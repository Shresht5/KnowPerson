'use client'
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Home() {
  const [name, setName] = useState('')
  const router = useRouter()
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/${name}`)
  }

  return (
    <>
      <main className="flex items-center justify-center min-h-screen bg-slate-100">
        <div className=" max-w-80 w-full p-4 rounded-lg shadow-xl bg-white text-black">
          <form onSubmit={handleSubmit} className="space-y-4">
            <h1 className="font-serif">Input name</h1>
            <input type="text" placeholder="name" name="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full border-[1px] px-3 rounded-md border-gray-400" />
            <div className="flex justify-center">
              <button type="submit" className="p-1 px-3 bg-blue-600 text-white rounded-lg ">Submit</button>
            </div>
          </form>
        </div>
      </main>
    </>);
}
