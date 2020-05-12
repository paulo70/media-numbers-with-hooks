import React from 'react'

import Card from './Card'

export default props => {

  const {min, max } = props
  return (
    <Card title='Media of Numbers' green>
      <div>
        <span>
          <span>Result:</span>
          <strong>{(min + max) / 2}</strong>
        </span>
      </div>
    </Card>
  )
}
