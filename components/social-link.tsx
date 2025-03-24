import { ReactNode } from 'react'
import Link from 'next/link'

export function SocialLink({
  link,
  name,
  svg,
  className,
}: {
  link: string
  name: string
  svg: ReactNode
  className?: string
}) {
  return (
    <Link href={link} target='_blank' className={className}>
      <div className='flex items-center gap-2'>
        {svg}
        <p className='font-bold'>{name}</p>
      </div>
    </Link>
  )
}
