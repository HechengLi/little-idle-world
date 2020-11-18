import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const fps = 60

const Map = ({ className, routes }) => {
  const canvasEl = useRef(null)
  const [sizeRatio, setSizeRatio] = useState(1)
  const [widthRatio, setWidthRatio] = useState(1)
  const [heightRatio, setHeightRatio] = useState(1)
  const [throttle, setThrottle] = useState(false)
  const [x, setX] = useState(-1)
  const [y, setY] = useState(-1)
  const history = useHistory()

  const onMouseMove = event => {
    if (throttle) return
    setThrottle(true)
    setTimeout(() => { setThrottle(false) }, 1000/fps)
    const canvas = canvasEl.current
    const rect = canvas.getBoundingClientRect()
    setX((event.clientX - rect.left)*widthRatio)
    setY((event.clientY - rect.top)*heightRatio)
  }

  useLayoutEffect(() => {
    canvasEl.current.width = canvasEl.current.parentNode.clientWidth
    canvasEl.current.height = canvasEl.current.parentNode.clientHeight
    const updateRatio = () => {
      const canvas = canvasEl.current
      setWidthRatio(canvas.width / canvas.clientWidth)
      setHeightRatio(canvas.height / canvas.clientHeight)
      if (canvas.clientWidth < canvas.clientHeight) {
        setSizeRatio(canvas.clientWidth/canvas.width)
      } else {
        setSizeRatio(canvas.clientHeight/canvas.height)
      }
    }
    window.addEventListener('resize', updateRatio)
    updateRatio()
    return () => window.removeEventListener('resize', updateRatio)
  }, [])

  useEffect(() => {
    const canvas = canvasEl.current
    const context = canvas.getContext('2d')
    const { width, height } = canvasEl.current
    const fontSize = 15/sizeRatio
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.lineWidth = 2
    context.lineJoin = 'round'
    context.textAlign = 'center'
    context.textBaseline = 'top'
    context.font = `${fontSize}px Arial`

    let hover = null
    routes.forEach(route => {
      context.setTransform(1, 0, 0, 1, 0, 0)
      context.strokeStyle = '#BDB2FF'
      context.shadowColor = '#BDB2FF'
      context.shadowBlur = 5
      context.fillStyle = '#BDB2FF'

      let posX, posY, rectWidth, rectHeight
      switch(route.type) {
        case 'percentage':
          posX = route.x * width - route.width * Math.max(width, height) / 2
          posY = route.y * height - route.width * Math.max(width, height) / 2
          rectWidth = route.width * Math.max(width, height)
          rectHeight = route.height * Math.max(width, height)
          break
        default:
          posX = route.x
          posY = route.y
          rectWidth = route.width
          rectHeight = route.height
      }
      if (route.image) {
        if (route.image.complete) {
          context.drawImage(route.image, posX, posY, rectWidth, rectHeight)
        } else {
          route.image.onload = () => {
            context.drawImage(route.image, posX, posY, rectWidth, rectHeight)
          }
        }
      }

      if (x >= posX*widthRatio*sizeRatio && x <= (posX+rectWidth)*widthRatio*sizeRatio
          && y >= posY*heightRatio*sizeRatio && y <= (posY+rectHeight)*heightRatio*sizeRatio) {
        context.strokeStyle = '#FFC6FF'
        context.shadowColor = '#FFC6FF'
        context.fillStyle = "#FFC6FF"
        hover = route
      }
      context.strokeRect(
        posX*widthRatio*sizeRatio,
        posY*heightRatio*sizeRatio,
        rectWidth*widthRatio*sizeRatio,
        rectHeight*heightRatio*sizeRatio
      )
      context.scale(widthRatio*sizeRatio, heightRatio*sizeRatio)
      context.fillText(
        route.text,
        posX+rectWidth/2,
        posY+rectHeight+10
      )
    })

    const onClick = () => {
      history.push(hover.link)
    }
    if (hover) {
      canvas.classList.add('hover')
      canvas.addEventListener('click', onClick)
    } else {
      canvas.classList.remove('hover')
      canvas.removeEventListener('click', onClick)
    }
    return () => { canvas.removeEventListener('click', onClick) }
  }, [sizeRatio, widthRatio, heightRatio, x, y, routes, history])

  return (
    <div className={className}>
      <canvas ref={canvasEl} onMouseMove={onMouseMove} />
    </div>
  )
}

const StyledMap = styled(Map)`
  height: 0%;
  
  canvas {
    max-width: 100%;
    max-height: 100%;
  
    &.hover {
      cursor: pointer;
    }
  }
`

export default StyledMap