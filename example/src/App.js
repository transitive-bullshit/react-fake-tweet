import React from 'react'

import { Tweet } from 'react-fake-tweet'
import 'react-fake-tweet/dist/index.css'

const hit = {
  user: {
    id_str: '327034465',
    name: 'Travis Fischer',
    screen_name: 'transitive_bs',
    profile_image_url:
      'http://pbs.twimg.com/profile_images/1236637281072578561/S2POoE76_normal.jpg',
  },
  retweet_count: 2517,
  favorite_count: 30,
  text: `How you build something is generally less important than *why* you're building it.


Software developers naturally tend to get excited about the "how" which is perfectly fine. It's a really important leap, however, to start framing every decision with "why" first and then "how".`,
}

export default function App() {
  return (
    <Tweet
      config={{
        user: {
          avatar: hit.user.profile_image_url,
          nickname: hit.user.screen_name,
          name: hit.user.name,
        },
        text: hit.text,
        date: '3:32 PM · Feb 14, 1997',
        retweets: hit.retweet_count,
        likes: hit.favorite_count,
      }}
    />
  )
}
