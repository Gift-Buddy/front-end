import { Apple } from '@/assets/svg/apple'
import { Github } from '@/assets/svg/github'
import { Google } from '@/assets/svg/google'
import { Header } from '@/components/header'
import { SignInButton } from '@/components/sign-in-button'

export default function Register() {
  return (
    <>
      <Header />
      <div className="mx-auto mt-16 flex h-[600px] w-2/5 flex-col items-center justify-evenly gap-5 rounded-lg bg-blue_dark p-14 shadow-lg">
        <span className="text-5xl font-bold text-white">Get started</span>
        <span className="text-center text-base text-white/70">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
          harum repudiandae consequuntur commodi adipisci delectus!
        </span>
        <div className="flex w-full flex-col space-y-5">
          <SignInButton svgBrand={<Google />} brand="Google" />
          <SignInButton svgBrand={<Apple />} brand="Apple" />
          <SignInButton svgBrand={<Github />} brand="Github" />
        </div>
      </div>
    </>
  )
}
