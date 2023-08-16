export function formatBytes(bytes: number) {
  if (!bytes || typeof bytes !== 'number') return ''

  const kilobyte = 1_024
  const megabyte = kilobyte * 1_024
  const gigabyte = megabyte * 1_024

  if (bytes >= gigabyte) {
    return formatNumber(bytes / gigabyte) + ' GB'
  } else if (bytes >= megabyte) {
    return formatNumber(bytes / megabyte) + ' MB'
  } else if (bytes >= kilobyte) {
    return formatNumber(bytes / kilobyte) + ' KB'
  } else {
    return bytes + (bytes > 1 ? ' bytes' : ' byte')
  }
}

const formatNumber = (number: number) => {
  return number.toLocaleString('en', {
    useGrouping: false,
    minimumFractionDigits: 0,
    maximumFractionDigits: 3,
  })
}
