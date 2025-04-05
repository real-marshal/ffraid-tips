import ExportedImage from 'next-image-export-optimizer'
import tankIcon from '@/public/images/tank.png'
import healerIcon from '@/public/images/healer.png'
import clockPositions from '@/public/images/clock.png'
import { ReactNode } from 'react'
import { slugify } from '@/utils/slugify'

export interface DutyPreparation {
  all: string[]
  tanks: string[]
  healers: string[]
}

export interface DutyPreparationSection {
  title: string
  content: ReactNode
}

export function Preparation({
  preparation,
  extraSections = [],
}: {
  preparation: DutyPreparation
  extraSections?: DutyPreparationSection[]
}) {
  return (
    <div className='bg-black rounded-lg text-white p-5 flex flex-col gap-4'>
      <div>
        <p className='text-xs lg:text-base text-[#bbb] italic'>
          This is just a reminder for people who already understand the fight. Skip this for now if
          you have no idea what this is about.
        </p>
        <h3>Things to agree on before pulling</h3>
        <div className='grid grid-cols-1 lg:grid-cols-3 mt-5 gap-6'>
          <div>
            <div className='flex items-center gap-2 h-[40px]'>
              <p className='lg:text-lg font-bold before:absolute before:w-full relative before:bottom-0 before:h-[4px] before:[background:_linear-gradient(90deg,_rgba(130,24,26,1)_0%,_rgba(28,57,142,1)_50%,_rgba(13,84,43,1)_100%)] grow pb-1 h-[36px]'>
                Everyone:
              </p>
            </div>
            <ul className='mt-3 list-disc pl-4'>
              {preparation.all.map((prep, ind) => (
                <li key={ind}>{prep}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className='flex items-center gap-2'>
              <ExportedImage src={tankIcon} alt='tank icon' className='w-10' />
              <p className='lg:text-lg font-bold border-b-4 border-blue-900 grow pb-1'>Tanks:</p>
            </div>
            <ul className='mt-3 list-disc pl-4'>
              {preparation.tanks.map((prep, ind) => (
                <li key={ind}>{prep}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className='flex items-center gap-2'>
              <ExportedImage src={healerIcon} alt='healer icon' className='w-10' />
              <p className='lg:text-lg font-bold border-b-4 border-green-900 grow pb-1'>Healers:</p>
            </div>
            <ul className='mt-3 list-disc pl-4'>
              {preparation.healers.map((prep, ind) => (
                <li key={ind}>{prep}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Collapse
        title='Standard clock positions'
        content={
          <div className='flex flex-col lg:flex-row'>
            <ExportedImage
              src={clockPositions}
              alt='clock positions'
              className='max-w-[300px] lg:max-w-[400px]'
            />
            <ul className='flex flex-col'>
              <li>MT - main tank</li>
              <li>OT - off tank</li>
              <li>H1/H2 - healers</li>
              <li>R1/R2 - ranged DPS</li>
              <li>M1/M2 - melee DPS</li>
            </ul>
          </div>
        }
      />
      {extraSections.map((section, ind) => (
        <Collapse key={ind} title={section.title} content={section.content} />
      ))}
    </div>
  )
}

function Collapse({ title, content }: { title: string; content: ReactNode }) {
  return (
    <div className='collapse collapse-arrow border-b-2 border-t-2 rounded-none [border-color:_rgba(255,255,255,0.5)]'>
      <input type='checkbox' />
      <div className='collapse-title p-0 flex items-center'>
        <h3 className='leading-[2]' id={slugify(title)}>
          {title}
        </h3>
      </div>
      <div className='collapse-content p-0 flex items-center justify-center *:first:mt-2'>
        {content}
      </div>
    </div>
  )
}
