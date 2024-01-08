# Class PacketInBound

## 🏭 Constructors

### constructor

```ts
new PacketInBound(opts: TransformOptions): PacketInBound
```
#### Parameters

- **opts**: `TransformOptions`
#### Return Type

- `PacketInBound`

*Inherited from: `Transform.constructor`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/node_modules/.pnpm/@types+node@18.15.11/node_modules/@types/node/stream.d.ts#L1045" target="_blank" rel="noreferrer">node_modules/.pnpm/@types+node@18.15.11/node_modules/@types/node/stream.d.ts:1045</a>
</p>


## 🏷️ Properties

### buffer <Badge type="danger" text="private" />

```ts
buffer: ByteBuffer = ...
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/client/channel.ts#L166" target="_blank" rel="noreferrer">packages/client/channel.ts:166</a>
</p>


## 🔧 Methods

### _transform

```ts
_transform(chunk: Buffer, encoding: string, callback: TransformCallback): void
```
#### Parameters

- **chunk**: `Buffer`
- **encoding**: `string`
- **callback**: `TransformCallback`
#### Return Type

- `void`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/client/channel.ts#L170" target="_blank" rel="noreferrer">packages/client/channel.ts:170</a>
</p>


### readPacketLength <Badge type="warning" text="protected" /> <Badge type="warning" text="abstract" />

```ts
readPacketLength(bb: ByteBuffer): number
```
#### Parameters

- **bb**: `ByteBuffer`
#### Return Type

- `number`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/client/channel.ts#L168" target="_blank" rel="noreferrer">packages/client/channel.ts:168</a>
</p>


