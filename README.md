# Twitch Comment Downloader

<p>
  <img alt="Version" src="https://img.shields.io/npm/v/twitch-comment-downloader?style=for-the-badge" />
  
  <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" />

  <img alt="Open Issues" src="https://img.shields.io/github/issues/jarvisprestidge/twitch-comment-downloader?style=for-the-badge" />
  
  <img alt="Size" src="https://img.shields.io/bundlephobia/minzip/twitch-comment-downloader?style=for-the-badge" />

</p>

Fetch comments for a given twitch vod

-   🎉 First class Typescript support
-   🚅 Faster than similar libraries
-   🌈 Returns the full unopinionated result
-   1️⃣ Single dependency
-   👌 Simple API

## Table of Contents

-   [Install](#install)
-   [Usage](#usage)
-   [Example](#example)
-   [Run Tests](#run-tests)
-   [Author](#author)
-   [Contributing](#contributing)
-   [Support](#show-your-support)

## Install

```bash
yarn add twitch-comment-downloader
```

```bash
npm install twitch-comment-downloader
```

## Usage

There are example implementations for both [javascript](./examples/javascript/index.js) and [typescript](./examples/typescript/index.ts) in the top level [examples](./examples) directory.

```typescript
import { TwitchCommentDownloader } from "../../src/index";

const vodId = "524487996";

const clientId = "kimne78kx3ncx6brgo4mv6wki5h1ko";

const main = async (): Promise<void> => {

    // Instantiate twitch comment downloader
    const twitchCommentDownloader = new TwitchCommentDownloader(clientId);
    // Get all comments for a given vod id
    const comments = await twitchCommentDownloader.getComments(vodId);

    // Do something with the results
    for (const comment of comments) {
        const timestamp = new Date(comment.created_at).toISOString();
        const commenter = comment.commenter.display_name;
        const message = comment.message.body;
        console.log(`[${timestamp}] @${commenter} - ${message}`);
    }

    console.log(`Done fetching ${comments.length} comments from vod id: ${vodId}`);
};

main().catch((err) => console.error(err));

```

## Example

More examples can be found in the [examples](./examples) directory.

```bash
➜ yarn example
$ ts-node example/index.ts

[2019-12-21T16:40:32.516Z] @cwestlove - Pog
[2019-12-21T16:41:18.824Z] @Nathz - HeyGuys
[2019-12-21T16:41:22.869Z] @RakinWar - Me
[2019-12-21T16:41:23.580Z] @huskaa - DADDY
[2019-12-21T16:41:25.185Z] @SBT_NoSKiLLZ - !sens
[2019-12-21T16:41:25.321Z] @Nightbot - 400 dpi - 0.092 X&Y // ADS: 0.50 // Scoped: 0.50
[2019-12-21T16:41:26.429Z] @caffeinne - !sens
[2019-12-21T16:41:27.063Z] @cwestlove - it was none of you
.
.
.
[2019-12-21T19:44:22.544Z] @purg3001 - hi
[2019-12-21T19:44:22.732Z] @cwestlove - <3

Done fetching 1456 comments from vod id: 524487996
```

## Run tests

```bash
yarn test
```

## Author

👤 **Jarvis Prestidge <jarvisprestidge@gmail.com>**

-   Site: https://jarvisprestidge.io
-   Twitter: [@jarvisprestidge](https://twitter.com/jarvisprestidge)
-   Github: [@jarvisprestidge](https://github.com/jarvisprestidge)
-   LinkedIn: [@jarvisprestidge](https://linkedin.com/in/jarvisprestidge)

<p>
  <a href="https://twitter.com/jarvisprestidge" target="_blank">
    <img alt="Twitter: jarvisprestidge" src="https://img.shields.io/twitter/follow/jarvisprestidge.svg?style=social" />
  </a>
</p>

## Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/jarvisprestidge/twitch-comment-downloader/issues). You can also take a look at the [contributing guide](./CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

<a href="https://www.patreon.com/jarvisprestidge">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
