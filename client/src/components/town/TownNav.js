import React from 'react'
import { useRouteMatch } from 'react-router-dom'

import Map from '../Map'
import test1 from '../../resource/images/test1.jpg'
import test2 from '../../resource/images/test2.jpg'

const createImage = src => {
  const image = new Image()
  image.src = src
  return image
}

const TownNav = () => {
  const { url } = useRouteMatch()
  const routes = [
    { x: 0.5, y: 0.5, height: 0.1, width: 0.1, type: 'percentage', text: '大厅', link: `${url}/hall` },
    { x: 0.2, y: 0.4, height: 0.1, width: 0.1, type: 'percentage', text: '武器', link: `${url}/weapon_shop`, image: createImage(test2) },
    { x: 0.35, y: 0.4, height: 0.1, width: 0.1, type: 'percentage', text: '防具', link: `${url}/armor_shop`, image: createImage(test1) },
    { x: 0.2, y: 0.6, height: 0.1, width: 0.1, type: 'percentage', text: '药水', link: `${url}/potion_shop` },
    { x: 0.7, y: 0.3, height: 0.1, width: 0.1, type: 'percentage', text: '练功', link: `${url}/training` }
  ]

  return (
    <Map routes={routes} />
  )
}

export default TownNav