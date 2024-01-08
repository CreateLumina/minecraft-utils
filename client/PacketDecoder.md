# Class PacketDecoder

## 🏭 Constructors

### constructor

```ts
new PacketDecoder(client: PacketRegistry): PacketDecoder
```
#### Parameters

- **client**: `PacketRegistry`
#### Return Type

- `PacketDecoder`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/client/channel.ts#L244" target="_blank" rel="noreferrer">packages/client/channel.ts:244</a>
</p>


## 🏷️ Properties

### client <Badge type="danger" text="private" />

```ts
client: PacketRegistry
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/client/channel.ts#L244" target="_blank" rel="noreferrer">packages/client/channel.ts:244</a>
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
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/client/channel.ts#L250" target="_blank" rel="noreferrer">packages/client/channel.ts:250</a>
</p>


### readPacketId <Badge type="warning" text="abstract" />

```ts
readPacketId(message: ByteBuffer): number
```
#### Parameters

- **message**: `ByteBuffer`
#### Return Type

- `number`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/client/channel.ts#L248" target="_blank" rel="noreferrer">packages/client/channel.ts:248</a>
</p>


