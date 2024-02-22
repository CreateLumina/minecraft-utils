# Common Module

Version made for [Lumina](https://github.com/CreateLumina) projects. Original credits goes to [Voxelum/minecraft-launcher-core-node](https://github.com/Voxelum/minecraft-launcher-core-node)

[![npm version](https://img.shields.io/npm/v/@createlumina/system.svg)](https://www.npmjs.com/package/@createlumina/system)
[![Downloads](https://img.shields.io/npm/dm/@createlumina/system.svg)](https://npmjs.com/@createlumina/system)
[![Install size](https://packagephobia.now.sh/badge?p=@createlumina/system)](https://packagephobia.now.sh/result?p=@createlumina/system)
[![npm](https://img.shields.io/npm/l/@createlumina/minecraft-launcher-core.svg)](https://github.com/CreateLumina/minecraft-utils/blob/master/LICENSE)
[![Build Status](https://github.com/CreateLumina/minecraft-utils/workflows/Build/badge.svg)](https://github.com/CreateLumina/minecraft-utils/actions?query=workflow%3ABuild)

A unified API to read directory or zip.

Support both nodejs and browser.

You can do read operations for zip or directory in same API:

```ts
import { openFileSystem } from '@createlumina/system';

let filePath = '/path/to/dir/';
const fs = await openFileSystem(filePath);
fs.readFile('a.txt'); // read /path/to/dir/a.txt

let zipPath = '/path/to/file.zip';
const fs = await openFileSystem(zipPath);
fs.readFile('a.txt'); // read a.txt in the file.zip!
```
