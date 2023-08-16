import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export function getRelativeTime(timestamp: string): string {
  if (!timestamp) return timestamp

  return dayjs(timestamp).fromNow()
}
