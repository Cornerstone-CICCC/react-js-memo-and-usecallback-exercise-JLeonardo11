import React, {memo} from 'react'

type Props = {
    onFetch:()=> void;
}

const GetProductsButton =  memo(({onFetch}: Props) => {
  console.log("Rendered Get Product Button component")

  
    return (
    <button onClick={onFetch}>Get Product</button>
      
  )
})

export default GetProductsButton
