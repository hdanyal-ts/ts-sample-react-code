import { useEffect, useState } from 'react'
import { verifyDataVisible, verifyDataPullTime } from '@utils/timer'

const FIVE_SECONDS = 5000
const THREE_MINUTES = 180000

export default function useDataVisibility () {
  const [isContentVisible, setContentVisible] = useState(false)
  const [setHuddleAction] = useState('')

  // Initialize active visibility on component mount
  useEffect(() => {
    const ts = new Date()
    const initialVisibility = verifyDataVisible(ts)
    setContentVisible(initialVisibility)
  }, [])

  useEffect(() => {
    // Create an interval that triggers every five seconds for data visibility
    const dataVisibleIntervalId = setInterval(() => {
      const ts = new Date()
      const isDataActive = verifyDataVisible(ts)
      setContentVisible(isDataActive)
    }, FIVE_SECONDS)

    // Create an interval that triggers every three minutes for pulling new data
    const pullingDataIntervalId = setInterval(() => {
      const ts = new Date()
      const shouldPullData = verifyDataPullTime(ts)
      shouldPullData && setHuddleAction('GET_DATA')
    }, THREE_MINUTES)
    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(dataVisibleIntervalId)
      clearInterval(pullingDataIntervalId)
    }
  }, [setHuddleAction])

  return { isContentVisible }
}
