import { formatBytes } from '@/utils/formatBytes'

import { describe, it, expect } from 'vitest'

describe('formatBytes', () => {
  it('returns empty string', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(formatBytes(undefined as any)).toBe('')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(formatBytes('' as any)).toBe('')
  })
  it('returns 1 byte for a argument of 1 byte', () => {
    expect(formatBytes(1)).toBe(`1 byte`)
  })
  it('returns 1001 bytes for a argument of 1001 bytes', () => {
    expect(formatBytes(1001)).toBe(`1001 bytes`)
  })
  it('returns 10 KB for an argument of 10240 bytes', () => {
    expect(formatBytes(1_024 * 10)).toBe(`10 KB`)
  })
  it('returns 1000 KB for an argument of 1024000 bytes', () => {
    expect(formatBytes(1_024 * 1_000)).toBe(`1000 KB`)
  })
  it('returns 1 MB for an argument of 1048576 bytes', () => {
    expect(formatBytes(1_024 * 1_024)).toBe(`1 MB`)
  })
  it('returns 6.3 MB for an argument of 6606028.8 bytes ', () => {
    expect(formatBytes(6.3 * 1_024 * 1_024)).toBe(`6.3 MB`)
  })
  it('returns 6.34 MB for an argument of 6647971.84 bytes', () => {
    expect(formatBytes(6.34 * 1_024 * 1_024)).toBe(`6.34 MB`)
  })
  it('returns 6.345 MB for an argument of 6653214.72 bytes', () => {
    expect(formatBytes(6.345 * 1_024 * 1_024)).toBe(`6.345 MB`)
  })
  it('returns 6.345 MB for an argument of 6653574.8009984 bytes', () => {
    expect(formatBytes(6.3453434 * 1_024 * 1_024)).toBe(`6.345 MB`)
  })
  it('returns 6.346 MB for an argument of 6653993.811968 bytes', () => {
    expect(formatBytes(6.345743 * 1_024 * 1_024)).toBe(`6.346 MB`)
  })
  it('returns 1000 MB for an argument of 1048576000 bytes', () => {
    expect(formatBytes(1_024 * 1_024 * 1_000)).toBe(`1000 MB`)
  })
  it('returns 1 GB for an argument of 1073741824 bytes', () => {
    expect(formatBytes(1_024 * 1_024 * 1_024)).toBe(`1 GB`)
  })
})
