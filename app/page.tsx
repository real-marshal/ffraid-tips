import { DutyCard } from '@/components/duty-card'
import path from 'node:path'
import fs from 'node:fs'
import { DutyMetadata } from '@/app/[dutyName]/types'
import { FC } from 'react'
import { StaticImageData } from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const dir = path.join(process.cwd(), 'duties')
  const duties = fs.readdirSync(dir)

  const promises = duties.map((dutyName) =>
    (async () => {
      const { meta, isWip } = await (import(`@/duties/${dutyName}/meta.ts`) as Promise<{
        meta: DutyMetadata
        isWip: boolean
      }>)
      const { heroImage } = await (import(`@/duties/${dutyName}/content.mdx`) as Promise<{
        default: FC
        heroImage?: StaticImageData
      }>)

      return { meta, heroImage, isWip }
    })()
  )
  const dutyMetas = (await Promise.all(promises))
    .filter(({ isWip }) => !isWip)
    .sort((a, b) => b.meta.createdAt.valueOf() - a.meta.createdAt.valueOf())

  return (
    <main className='min-h-screen p-5 lg:p-10'>
      <span className='italic text-lg lg:text-2xl'>Currently progging M6S...</span>
      <span className='block relative before:absolute before:-inset-1 before:block before:-skew-x-20 before:bg-rose-800 text-white w-max my-10 mx-auto before:border-l-12 before:border-black'>
        <h1 className='relative mx-[20px] mb-3 mt-3 text-center'>Recently released guides</h1>
      </span>
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
        {dutyMetas.map(({ meta, heroImage }, ind) => (
          <Link href={'./' + meta.shortTitle.toLowerCase()} key={ind}>
            <DutyCard
              image={heroImage}
              meta={meta}
              useShortDate
              className='hover:brightness-75 transition [&_h1]:!text-md'
            />
          </Link>
        ))}
      </div>
    </main>
  )
}
