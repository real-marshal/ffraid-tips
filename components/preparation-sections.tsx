import { ReactNode } from 'react'

export function PreparationSections({
  sections,
}: {
  sections: { title: string; content: ReactNode }[]
}) {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
      {sections.map(({ title, content }, ind) => (
        <div key={ind} className='max-w-[300px] lg:max-w-[400px]'>
          <p className='font-bold text-lg mb-2'>{title}</p>
          {content}
        </div>
      ))}
    </div>
  )
}
