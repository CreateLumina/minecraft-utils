# Task Module

Version made for [Lumina](https://github.com/CreateLumina) projects. Original credits goes to [Voxelum/minecraft-launcher-core-node](https://github.com/Voxelum/minecraft-launcher-core-node)

[![npm version](https://img.shields.io/npm/v/@createlumina/task.svg)](https://www.npmjs.com/package/@createlumina/task)
[![Downloads](https://img.shields.io/npm/dm/@createlumina/task.svg)](https://npmjs.com/@createlumina/task)
[![Install size](https://packagephobia.now.sh/badge?p=@createlumina/task)](https://packagephobia.now.sh/result?p=@createlumina/task)
[![npm](https://img.shields.io/npm/l/@createlumina/minecraft-launcher-core.svg)](https://github.com/CreateLumina/minecraft-utils/blob/master/LICENSE)
[![Build Status](https://github.com/CreateLumina/minecraft-utils/workflows/Build/badge.svg)](https://github.com/CreateLumina/minecraft-utils/actions?query=workflow%3ABuild)

This is a helper module for Minecraft Launcher. See the github home page for more information.

## Usage

### Progress Moniting

You can use `@createlumina/task` model to track the progress of a task. _In the launcher, they are majorly download task._

This module implements a basic object model for task with progress. The task can be paused or cancelled.

```ts
import { Task, TaskBase, task } from '@createlumina/task';

class ATask extends TaskBase {
    // implement a task
}

class BTask extends TaskBase {
    // implement a task
}

// suppose you have such task
const myTask = task('hello', function () {
    await this.yield(new ATask().setName('world'));
    await this.yield(new BTask().setName('xmcl'));
});

// start a task
const result = await task.startAndWait({
    onStart(task: Task<any>) {
        // the task path is the task name joined by dot (.)
        const path = task.path;
        console.log(`${path} started!`);
    },
    onUpdate(task: Task<any>, chunkSize: number) {
        // a task update
    },
    onFailed(task: Task<any>, error: any) {
        // on a task fail
    },
    onSucceed(task: Task<any>, result: any) {
        // on task success
        const path = task.path;
        console.log(`${path} ended!`);
    },
    // on task is paused/resumed/cancelled
    onPaused(task: Task<any>) {},
    onResumed(task: Task<any>) {},
    onCancelled(task: Task<any>) {},
});
// the result will print like
// hello started!
// hello.world started!
// hello.world ended!
// hello.xmcl started!
// hello.xmcl ended!
// hello ended!
```
