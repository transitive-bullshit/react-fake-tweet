# react-fake-tweet

> React renderer for tweets.

[![NPM](https://img.shields.io/npm/v/react-fake-tweet.svg)](https://www.npmjs.com/package/react-fake-tweet) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

<p align="center">
  <img src="https://raw.githubusercontent.com/transitive-bullshit/react-fake-tweet/master/example-0.png" alt="Example fake tweet" width="608" />
</p>

This project is a fork of [fake-tweet](https://github.com/lluiscamino/fake-tweet) by [Lluís Camino](https://github.com/lluiscamino) with the following improvements:

- Uses CSS modules to not pollute CSS namespace
- Allows you to override className, style, etc on root element
- Smaller bundle size via microbundle
- Fixes some style issues
- Used in production by [twitter-search.io](https://twitter-search.io)

## Install

```bash
npm install --save react-fake-tweet
```

## Usage

```jsx
import React, { Component } from 'react'

import { Tweet } from 'react-fake-tweet'
import 'react-fake-tweet/dist/index.css'

const tweet = {
  /* ... */
}

class Example extends Component {
  render() {
    return (
      <Tweet
        config={{
          user: {
            avatar: tweet.user.profile_image_url,
            nickname: tweet.user.screen_name,
            name: tweet.user.name
          },
          text: tweet.text,
          date: Date.now(),
          retweets: tweet.retweet_count,
          likes: tweet.favorite_count
        }}
      />
    )
  }
}
```

## Related

- [react-tweet-embed](https://github.com/capaj/react-tweet-embed) - Embeds a tweet using the official Twitter embedding SDK.
  - Significantly more accurate and robust
  - Slightly more heavy-weight
  - No way that I'm aware of to the resulting tweet's contents

## License

MIT © [transitive-bullshit](https://github.com/transitive-bullshit)
