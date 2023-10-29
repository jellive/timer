import React from 'react'
import { useStopwatch } from 'react-timer-hook'

export default function HomePage() {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset
  } = useStopwatch({ autoStart: false })

  const reactReset = () => reset(null, false)

  return (
    <div style={{ textAlign: 'center', backgroundColor: 'green' }}>
      <div
        style={{ fontSize: '100px', color: 'red', fontFamily: 'sans-serif' }}
      >
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reactReset}>Reset</button>
    </div>
  )
}
