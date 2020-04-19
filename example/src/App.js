import React from 'react'

import { Tweet } from 'react-fake-tweet'
import 'react-fake-tweet/dist/index.css'

const tweet = {
  user: {
    id_str: '327034465',
    name: 'Travis Fischer',
    screen_name: 'transitive_bs',
    profile_image_url:
      'http://pbs.twimg.com/profile_images/1236637281072578561/S2POoE76_normal.jpg'
  },
  retweet_count: 2517,
  favorite_count: 16342,
  text: 'This is not a real tweet.'
}

export default function App() {
  return (
    <Tweet
      config={{
        user: {
          avatar: tweet.user.profile_image_url,
          nickname: tweet.user.screen_name,
          name: tweet.user.name,
          verified: true
        },
        text: tweet.text,
        app: 'Twitter Web App',
        date: new Date('2020-04-20T16:20:00-0400'),
        retweets: tweet.retweet_count,
        likes: tweet.favorite_count
      }}
    />
  )
}
