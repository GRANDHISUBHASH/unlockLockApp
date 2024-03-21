import {useState} from 'react'
import {DuvCard, ImagCard, Paragraph, Btn} from './styledComponents' // Assuming these are default exports

const Unlock = () => {
  const [isLocked, setChangeLock] = useState(true)

  const LockChanger = () => {
    setChangeLock(prevIsLocked => !prevIsLocked)
  }

  return (
    <DuvCard>
      {isLocked ? (
        <>
          <ImagCard
            src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
            alt="lock"
          />
          <Paragraph>Your Device is Locked</Paragraph>
          <Btn type="button" onClick={LockChanger}>
            Unlock
          </Btn>
        </>
      ) : (
        <>
          <ImagCard
            src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
            alt="unlock"
          />
          <Paragraph>Your Device is Unlocked</Paragraph>
          <Btn type="button" onClick={LockChanger}>
            Lock
          </Btn>
        </>
      )}
    </DuvCard>
  )
}

export default Unlock
