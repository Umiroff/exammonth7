import React, { memo } from 'react'
import '../empty/Empty.css'
import { Link } from 'react-router-dom'

function Empty() {
  return (
    <div className='empty'>
        <h2>There is nothing added. Go <Link to={'/'}>Home</Link> to add.</h2>
    </div>
  )
}

export default memo(Empty)