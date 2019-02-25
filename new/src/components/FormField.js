import React from 'react'

export default ({name,type,placeholder,clase}) => {
  return <div class="field">
  <div class="control">
  <input name={name} type={type} placeholder={placeholder} class={clase} />
  </div>
</div>
}