import React from 'react'
import Button from './Button'

const buttonList = ["All","Live","Cricket","Cooking","Soccer","News"];
const ButtonList = () => {
  return (
    <div className='flex'>
      {
        buttonList.map(
          (name) => <Button key={name} name={name}/>
        )
      }
    </div>
  )
}

export default ButtonList