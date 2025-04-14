import Link from 'next/link'

export interface StratLink {
  label: string
  href: string
}

export function StratLinks({ links, className }: { links: StratLink[]; className?: string }) {
  return (
    <div className={`dropdown dropdown-hover leading-3 ${className ?? ''}`} data-theme='dark'>
      <div
        tabIndex={0}
        role='button'
        className='btn btn-sm max-sm:btn-ghost max-sm:h-[calc(var(--size)_*_0.5)]'
      >
        Links to original strategies
      </div>
      <div
        tabIndex={0}
        className='menu dropdown-content bg-base-300 rounded-box z-1 shadow-sm leading-5'
      >
        <nav>
          <ul className='flex flex-col font-bold'>
            {links.map(({ label, href }, ind) => (
              <li key={ind} className=''>
                <Link href={href} target='_blank'>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
