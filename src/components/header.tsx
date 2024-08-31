import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className="flex items-center justify-between py-6">
      <Link href="/" className="flex items-center gap-4">
        <Image
          className="relative -top-[5px]"
          src="/logo.png"
          alt="GiftBuddy logo"
          width={48}
          height={48}
        />
        <span className="text-3xl font-semibold">GiftBuddy</span>
      </Link>
      <div className="flex items-center space-x-8">
        <Link href="/" className="px-5 py-1 text-xl font-normal transition-all">
          Create event
        </Link>
        <Link href="/register">
          <button
            className="rounded-lg border border-zinc-900 bg-yellow_transparency px-5 py-1 text-xl font-normal transition-all hover:brightness-90"
            type="button"
          >
            Sign in
          </button>
        </Link>
      </div>
    </header>
  )
}
