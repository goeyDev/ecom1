import { unstable_cache as nextCache } from "next/cache"
import { cache as reactCache } from "react"

// type Callback = (...args: unknown[]) => Promise<any>
type Callback<Return = unknown> = (...args: unknown[]) => Promise<Return>;
export function cache<T extends Callback>(
  cb: T,
  keyParts: string[],
  options: { revalidate?: number | false; tags?: string[] } = {}
) {
  return nextCache(reactCache(cb), keyParts, options)
}
