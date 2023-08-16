export function getPlatformNamePrefix(): string {
  return (
    (import.meta.env.VITE_PLATFORM_NAME_PREFIX as string) ?? 'Block'
  ).toLocaleUpperCase()
}
