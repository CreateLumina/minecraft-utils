# Download Core

Version made for [Lumina](https://github.com/CreateLumina) projects. Original credits goes to [Voxelum/minecraft-launcher-core-node](https://github.com/Voxelum/minecraft-launcher-core-node)

[![npm version](https://img.shields.io/npm/v/@createlumina/file-transfer.svg)](https://www.npmjs.com/package/@createlumina/file-transfer)
[![Downloads](https://img.shields.io/npm/dm/@createlumina/file-transfer.svg)](https://npmjs.com/@createlumina/file-transfer)
[![Install size](https://packagephobia.now.sh/badge?p=@createlumina/file-transfer)](https://packagephobia.now.sh/result?p=@createlumina/file-transfer)
[![npm](https://img.shields.io/npm/l/@createlumina/minecraft-launcher-core.svg)](https://github.com/CreateLumina/minecraft-utils/blob/master/LICENSE)
[![Build Status](https://github.com/CreateLumina/minecraft-utils/workflows/Build/badge.svg)](https://github.com/CreateLumina/minecraft-utils/actions?query=workflow%3ABuild)

Provide a high performance download file function based on [undici](https://github.com/nodejs/undici).

-   Support download by range request
    -   Customize the range size
-   Support validating the checksum
    -   If the validation matched, it won't download the file.
    -   Also support customize validation.
-   Support download and fallback to another url
-   Support AbortSignal
-   Fully customizable retry logic

## Usage

Download the file by url

```ts
import { download } from '@createlumina/file-transfer';

await download({
    url: 'http://example.com/file.zip', // required
    destination: 'file.zip', // required
    headers: {
        // optional
        customized: 'header',
    },
    abortSignal: new AbortController().signal, // optional
    progressController: (url, chunkSize, progress, total) => {
        // optional
        console.log(url);
        console.log(chunkSize);
        console.log(progress);
        console.log(total);
    },
    // use validator to validate the file
    validator: {
        // optional
        algorithm: 'sha1',
        hash: '1234567890abcdef1234567890abcdef12345678',
    },
});
```

Download with fallback url

```ts
import { download } from '@createlumina/file-transfer';

await download({
    // using array to fallback
    url: ['http://example.com/file.zip', 'http://example.com/fallback.zip'],
    destination: 'file.zip',
});
```
