import { discordLink } from '@/data'
import { DiscordIcon, RedditIcon } from '@/components/icons'
import { SocialLink } from '@/components/social-link'

export function FeedbackLinks({
  redditLink,
  className,
}: {
  redditLink: string
  className?: string
}) {
  return (
    <div className={`dropdown dropdown-top ${className}`}>
      <div tabIndex={0} role='button' className='btn btn-sm btn-ghost m-1'>
        Discuss or propose changes
      </div>
      <div tabIndex={0} className='dropdown-content bg-base-300 rounded-box z-1 p-3 shadow-sm'>
        <nav>
          <div className='flex flex-col gap-5'>
            <SocialLink
              name='thread on reddit for this page'
              link={redditLink}
              svg={<RedditIcon className='size-4' />}
              className='hover:text-red-500 text-sm'
            />
            <SocialLink
              name='discord chat room'
              link={discordLink}
              svg={<DiscordIcon className='size-4' />}
              className='hover:text-indigo-500 text-sm'
            />
          </div>
        </nav>
      </div>
    </div>
  )
}
