import fs from 'node:fs'
import path from 'node:path'
import { Metadata } from 'next'
import { DutyHeadings, DutyMetadata } from '@/app/[dutyName]/types'
import { FC } from 'react'
import { DutyCard } from '@/components/duty-card'
import { StaticImageData } from 'next/image'
import { UrlBox } from '@/components/url-box'
import { Info } from '@/components/info'
// import { FeedbackLinks } from '@/components/feedback-links'
import { TableOfContents } from '@/components/table-of-contents'
import { slugify } from '@/utils/slugify'
import { Wip } from '@/components/wip'
import { ListBullet } from '@/components/icons'

type DutyPageParams = { dutyName: string }

export const dynamicParams = false

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), 'duties')
  const duties = fs.readdirSync(dir)

  return duties.map((duty) => ({
    dutyName: duty,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<DutyPageParams>
}): Promise<Metadata> {
  const { dutyName } = await params

  const { meta } = (await import(`@/duties/${dutyName}/meta.ts`)) as { meta: DutyMetadata }

  return {
    title: `${meta.shortTitle} guide - FFraid.tips`,
    description: `Easy to understand guide for ${meta.type.replace('-', ' ')} ${meta.fullTitle} also known as ${meta.shortTitle} in MMORPG Final Fantasy XIV (FFXIV) with animations for each mechanic. Raidplan, hector and other popular strategies are explained.`,
  }
}

export default async function DutyPage({ params }: { params: Promise<DutyPageParams> }) {
  const { dutyName } = await params

  const {
    meta,
    headings = {},
    isWip = false,
  } = (await import(`@/duties/${dutyName}/meta.ts`)) as {
    meta: DutyMetadata
    headings?: DutyHeadings
    isWip?: boolean
  }

  const { default: DutyContent, heroImage } = (await import(
    `@/duties/${dutyName}/content.mdx`
  )) as {
    default: FC
    heroImage?: StaticImageData
  }

  return (
    <main className='min-h-screen grid grid-cols-1 lg:grid-cols-[1fr_60%_1fr] p-5 gap-y-10 relative'>
      <TableOfContents
        headings={headings}
        className='hidden lg:block xl:mx-10 lg:mx-2 lg:justify-self-end lg:sticky lg:top-[calc(88px_+_var(--spacing)_*_5)] lg:h-min lg:[align-self:_start]'
      />
      <article className='flex flex-col gap-4'>
        <DutyCard image={heroImage} meta={meta} />
        <div className='grid lg:grid-cols-3 lg:grid-rows-[1fr_auto] gap-4'>
          <UrlBox
            href={slugify(meta.shortTitle)}
            className='lg:[height:_min-content] lg:order-2 lg:mt-5 lg:col-start-3'
          />
          {meta.difficulty !== 'normal' && (
            <Info className='order-1 lg:col-span-2'>
              This right here is considered high-end content. Before going in check that your gear
              matches the min ilvl and has materia melded. You should also bring some food to have
              even more damage and hp. And don't forget to increase target's castbar in your UI
              settings and put it closer to your screen's center - you need to see easily what
              exactly the boss is going to do to react to mechanics in time. After you're done
              getting to know the mechs, have a look at the preparation section.
            </Info>
          )}
          {/*<FeedbackLinks*/}
          {/*  redditLink='https://reddit.com'*/}
          {/*  className='order-3 lg:col-start-3 lg:row-start-2 justify-self-end lg:h-min [&>.btn]:!text-end'*/}
          {/*/>*/}
        </div>
        {isWip && <Wip />}
        <TableOfContents headings={headings} className='lg:hidden' />
        <DutyContent />
      </article>
      <div className='dropdown dropdown-left dropdown-top fixed bottom-5 right-5 z-100 lg:hidden'>
        <div tabIndex={0} role='button' className='btn btn-xl btn-circle'>
          <ListBullet className='size-7' />
        </div>
        <div tabIndex={0} className='dropdown-content w-[75vw]'>
          <TableOfContents headings={headings} listClassName='max-h-[60vh]' />
        </div>
      </div>
      {/*<div className='w-50 h-50'>ad</div>*/}
    </main>
  )
}
