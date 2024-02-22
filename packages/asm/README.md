# ASM Module

Version made for [Lumina](https://github.com/CreateLumina) projects. Original credits goes to [Voxelum/minecraft-launcher-core-node](https://github.com/Voxelum/minecraft-launcher-core-node)

[![npm version](https://img.shields.io/npm/v/@createlumina/asm.svg)](https://www.npmjs.com/package/@createlumina/asm)
[![Downloads](https://img.shields.io/npm/dm/@createlumina/asm.svg)](https://npmjs.com/@createlumina/asm)
[![Install size](https://packagephobia.now.sh/badge?p=@createlumina/asm)](https://packagephobia.now.sh/result?p=@createlumina/asm)
[![npm](https://img.shields.io/npm/l/@createlumina/minecraft-launcher-core.svg)](https://github.com/CreateLumina/minecraft-utils/blob/master/LICENSE)
[![Build Status](https://github.com/CreateLumina/minecraft-utils/workflows/Build/badge.svg)](https://github.com/CreateLumina/minecraft-utils/actions?query=workflow%3ABuild)

Parse Java bytecode, which port from [java asm package](https://asm.ow2.io/).

## Usage

### Visit java class in jar file

The usage is just like asm library in java:

```ts
import { AnnotationVisitor, ClassReader, ClassVisitor, MethodVisitor, Opcodes } from '@createlumina/asm';

class CustomClassVisitor extends ClassVisitor {
    public constructor() {
        super(Opcodes.ASM5);
    }

    // visit the class
    visit(
        version: number,
        access: number,
        name: string,
        signature: string,
        superName: string,
        interfaces: string[],
    ): void {}

    // visit method
    public visitMethod(access: number, name: string, desc: string, signature: string, exceptions: string[]) {
        return null;
    }

    // visit field
    public visitField(access: number, name: string, desc: string, signature: string, value: any) {
        return null;
    }
}

const visitor = new CustomClassVisitor();
const classData: Buffer = await fs.readFile('path/to/some.class');
new ClassReader(classData).accept(visitor);
```
