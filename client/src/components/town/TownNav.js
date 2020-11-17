import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import Map from '../Map'

const TownNav = () => {
  const { url } = useRouteMatch()
  const routes = [
    { x: 0, y: 0, height: 100, width: 100, text: '大厅', link: `${url}/hall` },
    { x: 150, y: 0, height: 100, width: 100, text: '武器', link: `${url}/weapon_shop` },
    { x: 300, y: 0, height: 100, width: 100, text: '防具', link: `${url}/armor_shop` },
    { x: 150, y: 150, height: 100, width: 100, text: '药水', link: `${url}/potion_shop` },
    { x: 150, y: 300, height: 100, width: 100, text: '练功', link: `${url}/training` },
  ]

  return (
    <Map routes={routes} />
  )
}

export default TownNav