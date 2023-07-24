import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex gap-3 m-5">
      <Link href="/dashboard" className='text-gray-500 hover:text-white ease-in duration-200 font-semibold hove'>Dashboard</Link>

    </div>
  )
}
