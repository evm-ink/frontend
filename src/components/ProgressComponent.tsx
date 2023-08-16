import { useState, useEffect } from 'react'

interface Props {
  progress: number
  duration: number
}

const ProgressComponent = ({ progress, duration }: Props) => {
  const [animationProgress, setAnimationProgress] = useState(0)

  useEffect(() => {
    const startTime = Date.now()
    let animationFrame: number

    const animate = () => {
      const elapsedTime = Date.now() - startTime
      const progressFraction = elapsedTime / duration

      if (progressFraction >= 1) {
        setAnimationProgress(progress)
        cancelAnimationFrame(animationFrame)
      } else {
        setAnimationProgress(progressFraction * progress)
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [progress, duration])

  return (
    <div className="w-full max-w-[800px] h-4 p-1 bg-[#202025] rounded-[10px] overflow-hidden">
      <div
        className="h-2 transition-[width] bg-[#52ff00] ease-in-out rounded-[6px]"
        style={{ width: `${animationProgress}%` }}
      />
    </div>
  )
}

export default ProgressComponent
