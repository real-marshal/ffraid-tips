import ExportedImage from 'next-image-export-optimizer'
import { DutyMetadata } from '@/app/[dutyName]/types'
import { StaticImageData } from 'next/image'

export function DutyCard({
  image,
  meta,
  useShortDate,
  className,
}: {
  image?: StaticImageData
  meta: DutyMetadata
  useShortDate?: boolean
  className?: string
}) {
  return (
    <div className={`relative z-0 rounded-lg shadow-md ${className}`} data-theme='dark'>
      {image ? (
        <ExportedImage
          src={image}
          alt='duty card image'
          className='rounded-lg brightness-50'
          priority
          fetchPriority='high'
        />
      ) : (
        <div className='h-70' />
      )}
      <div className='absolute top-0 left-0 w-full h-full p-3 lg:p-6 flex flex-col justify-between'>
        <div className='grid grid-cols-[1fr_auto] grid-rows-[1fr_auto]'>
          <span className='text-slate-400 text-normal text-lg lg:text-2xl xl:text-3xl uppercase'>
            {meta.type.replace('-', ' ')}:
          </span>
          <span className='col-start-2 row-start-1 font-bold text-sm lg:text-lg'>
            {!useShortDate && 'Posted on '}
            {meta.createdAt.toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: useShortDate ? undefined : 'numeric',
            })}
          </span>
          <h1 className='row-start-2 col-span-2'>{meta.fullTitle}</h1>
        </div>
        <div className='flex justify-between'>
          <div className='flex gap-5 [text-shadow:_0px_0px_4px_white] text-sm lg:text-xl xl:text-2xl'>
            <span>Patch: {meta.patch}</span>
            <span>Min Ilvl: {meta.minIlvl}</span>
          </div>
        </div>
        {meta.difficulty !== 'normal' && (
          <span className='absolute bottom-3 right-3 lg:bottom-6 lg:right-6 font-bold uppercase inline-block bg-rose-800 p-1 text-xs lg:text-xl xl:text-2xl [writing-mode:_vertical-lr] [text-orientation:_upright] opacity-85'>
            {meta.difficulty}
          </span>
        )}
      </div>
    </div>
  )
}
