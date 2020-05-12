import React from 'react'

import Card from './Card'

export default props => {

  const { min, max } = props
  const random = parseInt(Math.random() * (max - min)) + min
  return (
    <Card title='Sort of Numbers' purple>
      <div>
        <span>
          <span>Result:</span>
          <strong>{ random }</strong>
        </span>
      </div>
    </Card>
  )
}
