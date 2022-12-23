import { Dimensions } from 'react-native'
import Matter from 'matter-js'

import Bird from '../components/Bird'
import Floor from '../components/Floor'

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

const BOTTOM = 51

export default () => {
  let engine = Matter.Engine.create({
    enableSleeping: false
  })

  let world = engine.world

  engine.gravity.y = 0.4

  return {
    physics: { engine, world },
    Bird: Bird(world, 'green', { x: 120, y: 400 }, { height: 40, width: 40 }),
    Floor: Floor(
      world,
      '#E1D694',
      { x: windowWidth / 2, y: windowHeight - 17 },
      { height: BOTTOM + 20, width: windowWidth }
    )
  }
}
