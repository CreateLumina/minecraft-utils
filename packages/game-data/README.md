# Game Data

Version made for [Lumina](https://github.com/CreateLumina) projects. Original credits goes to [Voxelum/minecraft-launcher-core-node](https://github.com/Voxelum/minecraft-launcher-core-node)

[![npm version](https://img.shields.io/npm/v/@createlumina/world.svg)](https://www.npmjs.com/package/@createlumina/world)
[![Downloads](https://img.shields.io/npm/dm/@createlumina/world.svg)](https://npmjs.com/@createlumina/world)
[![Install size](https://packagephobia.now.sh/badge?p=@createlumina/world)](https://packagephobia.now.sh/result?p=@createlumina/world)
[![npm](https://img.shields.io/npm/l/@createlumina/minecraft-launcher-core.svg)](https://github.com/CreateLumina/minecraft-utils/blob/master/LICENSE)
[![Build Status](https://github.com/CreateLumina/minecraft-utils/workflows/Build/badge.svg)](https://github.com/CreateLumina/minecraft-utils/actions?query=workflow%3ABuild)

Provides functions to parse Minecraft game data like level data, server data.

## Usage

### Save/World Data Loading

Read the level info from a buffer.

```ts
import { WorldReader, LevelDataFrame } from '@createlumina/game-data';
const worldSaveFolder: string;
const reader: WorldReader = await WorldReader.create(worldSaveFolder);
const levelData: LevelDataFrame = await reader.getLevelData();
```

**_Preview_** Read the region data, this feature is not tested yet, but the api will look like this

```ts
import { WorldReader, RegionDataFrame, RegionReader } from '@createlumina/game-data';
const worldSaveFolder: string;
const reader: WorldReader = await WorldReader.create(worldSaveFolder);
const chunkX: number;
const chunkZ: number;
const region: RegionDataFrame = await reader.getRegionData(chunkX, chunkZ);
```

## Some Important Concepts

These concept might help you to understand how to use the API.

### Level

The metadata of one Minecraft save. It contains the info like `when the world is created`, `what is the name of it`, or other metadata.

In code, they are represented by `LevelDataFrame`.

### Region

The Minecraft blocks data are stored in region file (.mca). One region contains 16 sections. Each section contains 16x16x16 blockstates, biome, entities, tileentities and other data.

For the Minecraft version < 1.13, the mca NBT data store the **global** blockstate ids in `Data` and `Blocks` fields.

For the Minecraft version >= 1.13, the mca NBT data store the **local** blockstate ids in `BlockStates` and a mapping to map the **local** blockstate ids to `BlockState` object.

#### In-Chunk Coord

One chunk (section) in region contains 4096 (16x16x16) blockstates, and they are indexed by [0, 4096). The mapping from x, y, z to index is `(x, y, z) -> y << 8 | z << 4 | x`.

### Read and Write Server Info

```ts
import { readInfo, writeInfo, ServerInfo } from '@createlumina/game-data';

const seversDatBuffer: Buffer; // this is the servers.dat under .minecraft folder
const infos: ServerInfo[] = await readServerInfo(seversDatBuffer);
const info: ServerInfo = infos[0];

// info.ip -> server ip
// info.name -> server name
```
