import React from 'react'

export default ({clase, content}) => {
  return <div>
    <button className={clase}>{content}</button>
    </div>
}