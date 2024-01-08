# Class PacketEncoder

## 🏭 Constructors

### constructor

```ts
new PacketEncoder(client: PacketRegistry): PacketEncoder
```
#### Parameters

- **client**: `PacketRegistry`
#### Return Type

- `PacketEncoder`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/client/channel.ts#L282" target="_blank" rel="noreferrer">packages/client/channel.ts:282</a>
</p>


## 🏷️ Properties

### client <Badge type="danger" text="private" />

```ts
client: PacketRegistry
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/client/channel.ts#L282" target="_blank" rel="noreferrer">packages/client/channel.ts:282</a>
</p>


## 🔧 Methods

### _transform

```ts
_transform(message: any, encoding: string, callback: TransformCallback): void
```
#### Parameters

- **message**: `any`
- **encoding**: `string`
- **callback**: `TransformCallback`
#### Return Type

- `void`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/client/channel.ts#L288" target="_blank" rel="noreferrer">packages/client/channel.ts:288</a>
</p>


### writePacketId <Badge type="warning" text="protected" /> <Badge type="warning" text="abstract" />

```ts
writePacketId(bb: ByteBuffer, id: number): void
```
#### Parameters

- **bb**: `ByteBuffer`
- **id**: `number`
#### Return Type

- `void`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/client/channel.ts#L286" target="_blank" rel="noreferrer">packages/client/channel.ts:286</a>
</p>


