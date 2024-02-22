# Modrinth API

Version made for [Lumina](https://github.com/CreateLumina) projects. Original credits goes to [Voxelum/minecraft-launcher-core-node](https://github.com/Voxelum/minecraft-launcher-core-node)

[![npm version](https://img.shields.io/npm/v/@createlumina/modrinth.svg)](https://www.npmjs.com/package/@createlumina/modrinth)
[![Downloads](https://img.shields.io/npm/dm/@createlumina/modrinth.svg)](https://npmjs.com/@createlumina/modrinth)
[![Install size](https://packagephobia.now.sh/badge?p=@createlumina/modrinth)](https://packagephobia.now.sh/result?p=@createlumina/modrinth)
[![npm](https://img.shields.io/npm/l/@createlumina/minecraft-launcher-core.svg)](https://github.com/CreateLumina/minecraft-utils/blob/master/LICENSE)
[![Build Status](https://github.com/CreateLumina/minecraft-utils/workflows/Build/badge.svg)](https://github.com/CreateLumina/minecraft-utils/actions?query=workflow%3ABuild)

Provide the modrinth described in https://docs.modrinth.com/api-spec

## Usage

This package is depending on undici for HTTP in nodejs, and the browser version will use browser `fetch` instead of undici.

### Search Project in Modrinth

You can use keyword to search

```ts
import { ModrinthV2Client, SearchResult } from '@createlumina/modrinth';
const client = new ModrinthV2Client();
const searchOptions: SearchOptions = {
    query: 'shader', // searching shader
};
const result: SearchResult = await client.searchProjects(settingString);
const totalProjectCounts = result.total_hits;
for (const project of result.hits) {
    console.log(`${project.project_id} ${project.title} ${project.description}`); // print project info
}
```

### Get Project in Modrinth

You can get project detail info via project id, including the download url

```ts
import { ModrinthV2Client, ProjectVersionFile, ProjectVersion } from '@createlumina/modrinth';

const client = new ModrinthV2Client();
const projectId: string; // you can get this id from searchProjects
const project: project = await client.getProject(projectId); // project details
const versions: string[] = project.versions;
const oneVersion: string = versions[0];

const modVersion: ModVersion = await getProjectVersion(oneVersion);

const files: ProjectVersionFile[] = modVersion.files;

const { url, name, hashes } = files[0]; // now you can get file name, file hashes and download url of the file
```
