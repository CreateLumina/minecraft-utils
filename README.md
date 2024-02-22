# Minecraft Launcher Core

Version made for [Lumina](https://github.com/CreateLumina) projects. Original credits goes to [Voxelum/minecraft-launcher-core-node](https://github.com/Voxelum/minecraft-launcher-core-node)

[![npm](https://img.shields.io/npm/l/@createlumina/core.svg)](https://github.com/CreateLumina/minecraft-utils/blob/master/LICENSE)
[![Build Status](https://github.com/CreateLumina/minecraft-utils/workflows/Build/badge.svg)](https://github.com/CreateLumina/minecraft-utils/actions?query=workflow%3ABuild)
[![Convensional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://www.conventionalcommits.org)
[![Discord](https://discord.com/api/guilds/405213567118213121/widget.png)](https://discord.gg/W5XVwYY7GQ)

Provide several useful functions to build a Minecraft Launcher.

Most packages are targeting the [Electron](https://electronjs.org) environment. Feel free to report issues related to it.

### Looking for C# Launcher Core?

Introduce the awesome .net framework launcher core, [ProjBobcat](https://github.com/Corona-Studio/ProjBobcat).

It's the next generation Minecraft launcher core written in C# providing the freest, fastest and the most complete experience. https://corona.studio

### Featured Launcher

-   [x-minecraft-launcher](https://github.com/voxelum/x-minecraft-launcher): An launcher provides general electron api related to minecraft launching (in renderer side), making other developers can easily create new launcher view.
-   [PureLauncher](https://github.com/Apisium/PureLauncher): An awesome Minecraft Launcher using React to build beautiful UI.

## Getting Started

You can see [Active Packages](#active-packages) section to quickly find a package you need.

Go [our document website](https://docs.xmcl.app/en/core) to find more detail usage.

### Active Packages

| Name                         | Usage                                                                                     | Version                                                                                                                                     | Location                                             | Runtime Envrionment |
| ---------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | ------------------- |
| @createlumina/core           | Launch Minecraft                                                                          | [![npm version](https://img.shields.io/npm/v/@createlumina/core.svg)](https://www.npmjs.com/package/@createlumina/core)                     | [packages/core ](/packages/core)                     | Node                |
| @createlumina/installer      | Install Minecraft                                                                         | [![npm version](https://img.shields.io/npm/v/@createlumina/installer.svg)](https://www.npmjs.com/package/@createlumina/installer)           | [packages/installer ](/packages/installer)           | Node                |
| @createlumina/user           | User Authentication and skin                                                              | [![npm version](https://img.shields.io/npm/v/@createlumina/user.svg)](https://www.npmjs.com/package/@createlumina/user)                     | [packages/user ](/packages/user)                     | Node/Browser        |
| @createlumina/mod-parser     | Parse forge/liteloader/fabric mod                                                         | [![npm version](https://img.shields.io/npm/v/@createlumina/mod-parser.svg)](https://www.npmjs.com/package/@createlumina/mod-parser)         | [packages/mod-parser ](/packages/mod-parser)         | Node/Browser        |
| @createlumina/modrinth       | Provide Modrinth API                                                                      | [![npm version](https://img.shields.io/npm/v/@createlumina/modrinth.svg)](https://www.npmjs.com/package/@createlumina/modrinth)             | [packages/modrinth ](/packages/modrinth)             | Node/Browser        |
| @createlumina/client         | Utilities of Minecraft client network. Ping Minecraft Server                              | [![npm version](https://img.shields.io/npm/v/@createlumina/client.svg)](https://www.npmjs.com/package/@createlumina/client)                 | [packages/client ](/packages/client)                 | Node                |
| @createlumina/model          | Display player/block model                                                                | [![npm version](https://img.shields.io/npm/v/@createlumina/model.svg)](https://www.npmjs.com/package/@createlumina/model)                   | [packages/model ](/packages/model)                   | Browser             |
| @createlumina/gamesetting    | Parse game setting                                                                        | [![npm version](https://img.shields.io/npm/v/@createlumina/gamesetting.svg)](https://www.npmjs.com/package/@createlumina/gamesetting)       | [packages/gamesetting ](/packages/gamesetting)       | Node/Browser        |
| @createlumina/nbt            | Parse NBT                                                                                 | [![npm version](https://img.shields.io/npm/v/@createlumina/nbt.svg)](https://www.npmjs.com/package/@createlumina/nbt)                       | [packages/nbt ](/packages/nbt)                       | Node/Browser        |
| @createlumina/text-component | Parse and render Minecraft text                                                           | [![npm version](https://img.shields.io/npm/v/@createlumina/text-component.svg)](https://www.npmjs.com/package/@createlumina/text-component) | [packages/text-component ](/packages/text-component) | Node/Browser        |
| @createlumina/game-data      | Load level data or servers.dat                                                            | [![npm version](https://img.shields.io/npm/v/@createlumina/game-data.svg)](https://www.npmjs.com/package/@createlumina/game-data)           | [packages/game-data ](/packages/game-data)           | Node/Browser        |
| @createlumina/resourcepack   | Parse resource pack                                                                       | [![npm version](https://img.shields.io/npm/v/@createlumina/resourcepack.svg)](https://www.npmjs.com/package/@createlumina/resourcepack)     | [packages/resourcepack ](/packages/resourcepack)     | Node/Browser        |
| @createlumina/task           | Util package to create task                                                               | [![npm version](https://img.shields.io/npm/v/@createlumina/task.svg)](https://www.npmjs.com/package/@createlumina/task)                     | [packages/task ](/packages/task)                     | Node/Browser        |
| @createlumina/system         | A fs middleware for browser/node                                                          | [![npm version](https://img.shields.io/npm/v/@createlumina/system.svg)](https://www.npmjs.com/package/@createlumina/system)                 | [packages/system ](/packages/system)                 | Node/Browser        |
| @createlumina/unzip          | yauzl unzip wrapper                                                                       | [![npm version](https://img.shields.io/npm/v/@createlumina/unzip.svg)](https://www.npmjs.com/package/@createlumina/unzip)                   | [packages/unzip ](/packages/unzip)                   | Node                |
| @createlumina/file-transfer  | High performance undici file download implementation                                      | [![npm version](https://img.shields.io/npm/v/@createlumina/file-transfer.svg)](https://www.npmjs.com/package/@createlumina/file-transfer)   | [packages/file-transfer ](/packages/file-transfer)   | Node                |
| @createlumina/bytebuffer     | The bytebuffer module port from [bytebuffer.js](https://www.npmjs.com/package/bytebuffer) | [![npm version](https://img.shields.io/npm/v/@createlumina/bytebuffer.svg)](https://www.npmjs.com/package/@createlumina/bytebuffer)         | [packages/bytebuffer ](/packages/bytebuffer)         | Node/Browser        |

### Comsuming the Packages with bundlers

The whole project use typescript and esbuild to build. It will build both `esm` and `commonjs` version js files. Some modules can be used in browser, and they will have browser version built.

Nowaday, the bundler should all support reading the `module` field in package.json and use the esm version. If you are using webpack, you can use the `resolve.mainFields` option to specify which field to use.

From [my experience](https://github.com/Voxelum/x-minecraft-launcher), the [esbuild](https://esbuild.github.io/) and [vite](https://vitejs.dev/) works pretty fine with current `package.json`.

## Contribute

See [Contribute.md](/CONTRIBUTE.md)

## Special Thanks

[yushijinhun](https://github.com/yushijinhun), the author of [JMCCC](https://github.com/to2mbn/JMCCC) which inspire this library.

[Indexyz](https://github.com/Indexyz), helped me a lot on Minecraft launching, authing.

And all of contributors of this repo!
