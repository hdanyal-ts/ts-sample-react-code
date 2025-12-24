export default function usePackagingStopTotal ({ item, section }) {
  const stopSummary = getPackStopSummary(section)
  const rows = item.rows.map(composeTotalLabels(stopSummary))
  const tableProps = { ...item, rows }
  return tableProps
}
function accumulateEquipmentStops (prev, curr) {
  const totalNoStops = prev.totalNoStops + curr.noStops
  const totalDowntime = prev.totalDowntime + curr.downtime
  return { totalNoStops, totalDowntime }
}
function composeEquipmentStops (item) {
  const rawNoStops = item.responses[1].response
  const rawDowntime = item.responses[2].response
  const noStops = getNumberValue(rawNoStops)
  const downtime = getNumberValue(rawDowntime)
  return { noStops, downtime }
}
function composeTotalLabels (stopSummary) {
  return row => {
    const responses = row.responses.map(composeTotalRow(stopSummary))
    const updatedRow = { ...row, responses }
    delete updatedRow.isFlagged
    return updatedRow
  }
}
function composeTotalRow (summary) {
  return res => {
    if (res.label.includes('Total')) return res
    const isStops = res.label === 'NO_STOPS'
    const label = isStops ? summary.totalNoStops : summary.totalDowntime
    return { ...res, label: String(getNumberValue(label)) }
  }
}
function getNumberValue (input) {
  const floatNumber = parseFloat(input)
  if (!isNaN(floatNumber)) return floatNumber
  return 0.0
}
function getPackStopSummary (section) {
  const stopTable = section.cards.find(item => item.type === 'TABLE')
  const equipmentStopCount = stopTable.rows
    .map(composeEquipmentStops)
    .reduce(accumulateEquipmentStops, { totalNoStops: 0, totalDowntime: 0 })
  return equipmentStopCount
}
