import { cp, copyFile, mkdir, rm } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = resolve(root, 'dist')
const generatedHtml = resolve(dist, 'index.source.html')
const distIndex = resolve(dist, 'index.html')
const rootIndex = resolve(root, 'index.html')
const rootAssets = resolve(root, 'assets')

await copyFile(generatedHtml, distIndex)
await copyFile(generatedHtml, rootIndex)
await rm(rootAssets, { recursive: true, force: true })
await mkdir(rootAssets, { recursive: true })
await cp(resolve(dist, 'assets'), rootAssets, { recursive: true })
