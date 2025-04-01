import ExportedImage from 'next-image-export-optimizer'
import { DutyMetadata } from '@/app/[dutyName]/types'
import { StaticImageData } from 'next/image'

export function DutyCard({ image, meta }: { image?: StaticImageData; meta: DutyMetadata }) {
  return (
    <div className='relative z-0 rounded-lg shadow-md' data-theme='dark'>
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
        <div>
          <span className='text-slate-400 text-normal text-lg lg:text-2xl xl:text-3xl uppercase'>
            {meta.type.replace('-', ' ')}:
          </span>
          <h1>{meta.fullTitle}</h1>
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
