import { HomeIllustration } from '@/assets/svg/home-illustration'
import { Header } from '@/components/header'
import { Annie_Use_Your_Telescope } from 'next/font/google'

const annie = Annie_Use_Your_Telescope({ subsets: ['latin'], weight: '400' })

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center gap-10">
        <div className="flex flex-col items-start justify-center gap-2">
          <span className={`${annie.className} text-5xl text-black_text`}>
            Who is my
          </span>
          <span className="text-8xl font-extrabold text-yellow_friend">
            secret friend?
          </span>
          <span className="text-xl font-normal text-black_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non
            neque sed augue consequat mattis. Etiam venenatis, libero porta
            pretium ornare, augue odio.
          </span>
          <button className="mt-5 w-full rounded-full bg-blue_dark py-5 text-3xl font-bold text-white transition-all hover:scale-105">
            Let&apos;s play
          </button>
        </div>
        <div>
          <HomeIllustration />
        </div>
      </div>
    </>
  )
}
