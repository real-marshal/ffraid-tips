// import { RedditIcon } from '@/components/icons'
// import { subredditLink } from '@/data'
// import { SocialLink } from '@/components/social-link'

export function Footer() {
  return (
    <footer className='footer footer-center bg-neutral text-neutral-content p-5 gap-7'>
      <div>
        <nav>
          <div className='flex gap-4'>
            {/*<SocialLink*/}
            {/*  name='reddit'*/}
            {/*  link={subredditLink}*/}
            {/*  svg={<RedditIcon />}*/}
            {/*  className='hover:text-red-500'*/}
            {/*/>*/}
            {/*<SocialLink*/}
            {/*  name='discord'*/}
            {/*  link={discordLink}*/}
            {/*  svg={<DiscordIcon />}*/}
            {/*  className='hover:text-indigo-500'*/}
            {/*/>*/}
          </div>
        </nav>
        <p>© {new Date().getFullYear()} FFraid.tips</p>
        <p className='text-xs/1 opacity-25'>Dawntrail is better than Endwalker</p>
      </div>
    </footer>
  )
}
