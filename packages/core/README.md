# Launcher Core Module

Version made for [Lumina](https://github.com/CreateLumina) projects. Original credits goes to [Voxelum/minecraft-launcher-core-node](https://github.com/Voxelum/minecraft-launcher-core-node)

[![npm version](https://img.shields.io/npm/v/@createlumina/core.svg)](https://www.npmjs.com/package/@createlumina/core)
[![Downloads](https://img.shields.io/npm/dm/@createlumina/core.svg)](https://npmjs.com/@createlumina/core)
[![Install size](https://packagephobia.now.sh/badge?p=@createlumina/core)](https://packagephobia.now.sh/result?p=@createlumina/core)
[![npm](https://img.shields.io/npm/l/@createlumina/minecraft-launcher-core.svg)](https://github.com/CreateLumina/minecraft-utils/blob/master/LICENSE)
[![Build Status](https://github.com/CreateLumina/minecraft-utils/workflows/Build/badge.svg)](https://github.com/CreateLumina/minecraft-utils/actions?query=workflow%3ABuild)

Provide the core function to parse Minecraft version and launch.

## Usage

### Parse Version JSON

Parse minecraft version as a resolved version, which is used for launching process. You can also read version info from it if you want.

```ts
import { Version } from '@createlumina/core';
const minecraftLocation: string;
const minecraftVersionId: string;

const resolvedVersion: ResolvedVersion = await Version.parse(minecraftLocation, minecraftVersionId);
```

### Diagnose

Get the report of the version. It can check if version missing assets/libraries.

```ts
import { MinecraftLocation, diagnose, ResolvedVersion } from '@createlumina/core';

const minecraft: MinecraftLocation;
const version: string; // version string like 1.13
const resolvedVersion: ResolvedVersion = await Version.parse(minecraft, version);

const report: MinecraftIssueReport = await diagnose(resolvedVersion.id, resolvedVersion.minecraftDirectory);

const issues: MinecraftIssues[] = report.issues;

for (let issue of issues) {
    switch (issue.role) {
        case 'minecraftJar': // your jar has problem
        case 'versionJson': // your json has problem
        case 'library': // your lib might be missing or corrupted
        case 'assets': // some assets are missing or corrupted
        // and so on
    }
}
```

### Launch Game

Launch minecraft from a version:

```ts
import { launch } from '@createlumina/core';
const version: string; // full version id, like 1.13, or your forge version like, 1.13-forge-<someForgeVersion>
const javaPath: string; // java executable path
const gamePath: string; // .minecraft path
const proc: Promise<ChildProcess> = launch({ gamePath, javaPath, version });
```

Detach from the parent process. So your launcher's exit/crash won't affact the Minecraft running.

```ts
const proc: Promise<ChildProcess> = Launcher.launch({
    gamePath,
    javaPath,
    version,
    extraExecOption: { detached: true },
});
```
