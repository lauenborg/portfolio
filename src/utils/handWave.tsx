import { useState, useEffect } from 'react'

interface HandWaveProps {
    minInterval: number
    maxInterval: number
}

const HandWave = ({ minInterval, maxInterval }: HandWaveProps) => {
    const [wave, setWave] = useState(false)

    const interval = () => {
        let randomInterval = Math.random() * (maxInterval - minInterval) + minInterval
        setTimeout(() => {
            setWave(true)
            setTimeout(() => {
                setWave(false)
                interval()
            }, 2000)
        }, randomInterval)
    }

    useEffect(() => {
        interval()
    }, [])

    return <span className={wave ? 'animate-wave' : ''}>👋</span>
}

export default HandWave
