import Link from 'next/link'

export default function notFound() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <h1 className='font-bold text-2xl'>Page Not found <Link href={'/'}>Go To Home</Link></h1>
    </div>
  )
}
