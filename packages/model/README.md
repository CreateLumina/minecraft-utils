# Model Module

Version made for [Lumina](https://github.com/CreateLumina) projects. Original credits goes to [Voxelum/minecraft-launcher-core-node](https://github.com/Voxelum/minecraft-launcher-core-node)

[![npm version](https://img.shields.io/npm/v/@createlumina/model.svg)](https://www.npmjs.com/package/@createlumina/model)
[![Downloads](https://img.shields.io/npm/dm/@createlumina/model.svg)](https://npmjs.com/@createlumina/model)
[![Install size](https://packagephobia.now.sh/badge?p=@createlumina/model)](https://packagephobia.now.sh/result?p=@createlumina/model)
[![npm](https://img.shields.io/npm/l/@createlumina/minecraft-launcher-core.svg)](https://github.com/CreateLumina/minecraft-utils/blob/master/LICENSE)
[![Build Status](https://github.com/CreateLumina/minecraft-utils/workflows/Build/badge.svg)](https://github.com/CreateLumina/minecraft-utils/actions?query=workflow%3ABuild)
[![stability-experimental](https://img.shields.io/badge/stability-experimental-orange.svg)](https://github.com/emersion/stability-badges#experimental)

_This module can only used for browser environment_

## Usage

### Build THREE.js model for block and player

_Please read how to use [resourcepacks](https://github.com/CreateLumina/minecraft-utils/tree/master/packages/resourcepack/README.md) before this_

Create THREE.js block model:

```ts
import { BlockModelFactory } from '@createlumina/model';

const textureRegistry: TextureRegistry;

const factory = new BlockModelFactory(textureRegistry);
const model: BlockModel.Resolved;
const o3d: THREE.Object3D = factory.getObject(model);
// add o3d to your three scene
```

Create THREE.js player model:

```ts
import { PlayerModel } from '@createlumina/model';

const player: PlayerModel = new PlayerModel();
const isSlimSkin: boolean; // if this skin use alex model
player.setSkin('http://your-skin-url', isSlimSkin);

const o3d: THREE.Object3D = player.playerObject3d;
// add o3d to your three scene
```
