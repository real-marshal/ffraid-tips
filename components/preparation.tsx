import ExportedImage from 'next-image-export-optimizer'
import tankIcon from '@/public/images/tank.png'
import healerIcon from '@/public/images/healer.png'

export interface DutyPreparation {
  all: string[]
  tanks: string[]
  healers: string[]
}

export function Preparation({ preparation }: { preparation: DutyPreparation }) {
  return (
    <div className='bg-black rounded-lg text-white p-5'>
      <p className='text-xs lg:text-base text-[#bbb] italic'>
        This is just a reminder for people who already understand the fight. Skip this for now if
        you have no idea what this is about.
      </p>
      <h3>Things to agree on before pulling: </h3>
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
  )
}
