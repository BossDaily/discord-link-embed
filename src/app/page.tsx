import Image from 'next/image'
import { Inter } from 'next/font/google'
import Embed from '@/components)/embed'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Create your own discord embed from a URL</p>
      <Embed />
    </main>
  )
}
