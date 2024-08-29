import './globals.css'
import type { Metadata } from 'next'
import { Baloo_2 } from 'next/font/google'

const baloo2 = Baloo_2({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GiftBuddy | Home',
  description:
    'A friendly-website that will help you to discover who is your secret friend',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={baloo2.className}>
        <main className="mx-auto grid max-w-[1600px] grid-rows-main_layout px-24">
          {children}
        </main>
      </body>
    </html>
  )
}
