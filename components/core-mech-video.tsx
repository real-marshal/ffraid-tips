export function CoreMechVideo({
  duty,
  filename,
  note,
}: {
  duty: string
  filename: string
  note?: string
}) {
  return (
    <div>
      <video
        tabIndex={0}
        autoPlay
        muted
        loop
        preload='none'
        playsInline
        className='rounded-md focus:scale-[1.2] focus:rounded-md transition duration-300 ease-out cursor-pointer'
      >
        <source src={`./duties/${duty}/av1/${filename}`} type='video/webm;codecs="av01.0.05M.08"' />
        <source src={`./duties/${duty}/vp9/${filename}`} type='video/webm;codecs="vp9"' />
        Your browser does not support the video tag.
      </video>
      {note && <p className='italic text-center'>{note}</p>}
    </div>
  )
}
