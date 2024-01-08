# Interface PacketRegistry

## 🔧 Methods

### findCoderById

```ts
findCoderById(packetId: number, side: "server" | "client"): Coder<any>
```
#### Parameters

- **packetId**: `number`
- **side**: `"server" | "client"`
#### Return Type

- `Coder<any>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/client/channel.ts#L239" target="_blank" rel="noreferrer">packages/client/channel.ts:239</a>
</p>


### getPacketId

```ts
getPacketId(message: any, side: "server" | "client"): number
```
#### Parameters

- **message**: `any`
- **side**: `"server" | "client"`
#### Return Type

- `number`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/client/channel.ts#L240" target="_blank" rel="noreferrer">packages/client/channel.ts:240</a>
</p>


