import { StaticImageData } from 'next/image'
import { slugify } from '@/utils/slugify'
import ExportedImage from 'next-image-export-optimizer'

export interface TrivialMechsMap {
  [key: string]: {
    label: string
    description: string
    strategy: string
    type?: 'tank' | 'healer'
    image: StaticImageData
  }
}

export function TrivialMechs({ mechs }: { mechs: TrivialMechsMap }) {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 text-center'>
      {Object.values(mechs).map((mech, ind) => (
        <div
          key={ind}
          className='flex flex-col justify-between shadow-sm rounded-md border-1 border-[rgba(0,0,0,0.1)] dark:bg-base-300'
          style={{
            borderTop:
              mech.type === 'healer'
                ? 'solid 5px #359735'
                : mech.type === 'tank'
                  ? 'solid 5px #3971c8;'
                  : 'solid 1px rgba(0,0,0,0.1)',
          }}
        >
          <div className='pt-3 pb-2 grow'>
            <h3 id={slugify(mech.label)} className='uppercase'>
              {mech.label}
            </h3>
            <p className='italic'>{mech.description}</p>
            <p className='font-bold mt-3'>{mech.strategy}</p>
          </div>
          <ExportedImage
            src={mech.image}
            alt={mech.label + ' image'}
            className='rounded-b-[calc(var(--radius-md)_-_2px)]'
          />
        </div>
      ))}
    </div>
  )
}
