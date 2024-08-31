import { ComponentProps, ReactNode } from 'react'

interface SignInButtonProps {
  brand: string
  svgBrand: ReactNode
}

type ButtonProps = SignInButtonProps & ComponentProps<'button'>

export function SignInButton({ brand, svgBrand, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="flex w-full items-center justify-center gap-5 rounded-full bg-white px-3 py-4"
    >
      {svgBrand}
      <span className="w-36 text-left text-base font-medium">
        Sign in with {brand}
      </span>
    </button>
  )
}
