import { Dimensions } from 'react-native'
import Matter from 'matter-js'

import { getPipeSizePosPair } from './ramdom'

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

export const Physics = (entities, { touches, time, dispatch }) => {
  let engine = entities.physics.engine

  touches
    .filter(t => t.type === 'press')
    .forEach(t => {
      Matter.Body.setVelocity(entities.Bird.body, {
        x: 0,
        y: -4
      })
    })

  Matter.Engine.update(engine, time.delta)

  return entities
}
