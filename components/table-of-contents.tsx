import Link from 'next/link'
import { DutyHeadings } from '@/app/[dutyName]/types'
import { slugify } from '@/utils/slugify'
import { Fragment } from 'react'

export function TableOfContents({
  headings,
  className,
}: {
  headings: DutyHeadings
  className?: string
}) {
  return (
    <aside
      className={`border-1 p-5 ${className} [box-shadow:_2px_2px_black] dark:[box-shadow:_2px_2px_white] dark:bg-slate-800`}
    >
      <nav>
        <ul className='pl-4'>
          {Object.values(headings).map((heading, ind) => (
            <li key={ind} className='pt-2'>
              <Link
                href={`#${slugify(typeof heading === 'object' ? heading.label : heading)}`}
                className='font-bold mb-3 hover:border-b-2'
              >
                {typeof heading === 'object' ? heading.label : heading}
              </Link>
              {typeof heading === 'object' && (
                <ul className='pl-4'>
                  {Object.values(heading.items).map((subHeading, subInd) => (
                    <li key={subInd}>
                      <Link href={`#${slugify(subHeading)}`} className='hover:border-b-2'>
                        {subHeading}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
