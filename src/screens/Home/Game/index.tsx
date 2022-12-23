import { useRef, useState, useEffect } from 'react'
import { GameEngine } from 'react-native-game-engine'

import { styles } from './styles'

import { Start } from './Start'

import entities from '../../../entities'

const Game = () => {
  const [running, setIsRunning] = useState(false)

  const gameEngineRef = useRef()

  const handleOnStartGame = () => {
    //TODO:
  }

  //return <Start handleOnStartGame={handleOnStartGame} />

  return (
    <GameEngine
      ref={gameEngineRef}
      running={running}
      entities={entities()}
      style={styles.engineContainer}
    />
  )
}

export { Game }
