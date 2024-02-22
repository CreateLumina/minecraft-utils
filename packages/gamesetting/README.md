# Gamesetting Module

Version made for [Lumina](https://github.com/CreateLumina) projects. Original credits goes to [Voxelum/minecraft-launcher-core-node](https://github.com/Voxelum/minecraft-launcher-core-node)

[![npm version](https://img.shields.io/npm/v/@createlumina/gamesetting.svg)](https://www.npmjs.com/package/@createlumina/gamesetting)
[![Downloads](https://img.shields.io/npm/dm/@createlumina/gamesetting.svg)](https://npmjs.com/@createlumina/gamesetting)
[![Install size](https://packagephobia.now.sh/badge?p=@createlumina/gamesetting)](https://packagephobia.now.sh/result?p=@createlumina/gamesetting)
[![npm](https://img.shields.io/npm/l/@createlumina/minecraft-launcher-core.svg)](https://github.com/CreateLumina/minecraft-utils/blob/master/LICENSE)
[![Build Status](https://github.com/CreateLumina/minecraft-utils/workflows/Build/badge.svg)](https://github.com/CreateLumina/minecraft-utils/actions?query=workflow%3ABuild)

Provide function to parse Minecraft game settings

## Usage

### Parse GameSetting (options.txt)

Serialize/Deserialize the minecraft game setting string.

```ts
import { GameSetting } from '@createlumina/gamesetting';
const settingString;
const setting: GameSetting = GameSetting.parse(settingString);
const string: string = GameSetting.stringify(setting);
```
