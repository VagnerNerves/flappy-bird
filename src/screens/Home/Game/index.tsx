import { useRef, useState, useEffect } from 'react'
import { GameEngine } from 'react-native-game-engine'

import { styles } from './styles'

import { Start } from './Start'
import { GameOver } from './GameOver'
import { Physics } from '../../../utils/physics'

import entities from '../../../entities'

const Game = () => {
  const [isRunning, setIsRunning] = useState(false)
  const [isGameOver, setIsGameOver] = useState(false)

  const gameEngineRef = useRef()

  const handlebackToStart = () => {
    setIsRunning(false)
    setIsGameOver(false)
  }

  const handleOnStartGame = () => {
    setIsRunning(true)
    setIsGameOver(false)
  }

  const handleOnGameOver = () => {
    setIsRunning(false)
    setIsGameOver(true)
  }

  const handleOnEvent = event => {
    switch (event.type) {
      case 'game_over':
        handleOnGameOver()
        break
    }
  }

  if (!isRunning && !isGameOver) {
    return <Start handleOnStartGame={handleOnStartGame} />
  }
  if (!isRunning && isGameOver) {
    return <GameOver handlebackToStart={handlebackToStart} />
  }

  return (
    <GameEngine
      systems={[Physics]}
      ref={gameEngineRef}
      running={isRunning}
      entities={entities()}
      onEvent={handleOnEvent}
      style={styles.engineContainer}
    />
  )
}

export { Game }
