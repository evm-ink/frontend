import dayjs from 'dayjs'
import jwtDecode, { JwtPayload } from 'jwt-decode'

export function isTokenValid(token?: string): boolean {
  if (!token) return false

  try {
    const decoded = jwtDecode(token)

    if (!decoded) return false

    const exp = (decoded as JwtPayload).exp

    return dayjs((exp ?? 0) * 1_000).isAfter(dayjs().add(5, 'minutes'))
  } catch (error) {
    return false
  }
}
