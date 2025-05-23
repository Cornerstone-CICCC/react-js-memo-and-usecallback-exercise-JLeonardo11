import { useState } from 'react'
import Profile from './components/Profile'
import GetProductsButton from './components/GetProductsButton'
import ProductList from './components/ProductList'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <h3>Count:{count}</h3>
      <button onClick={() => setCount(count + 1 )}>+</button>
      <Profile firstname = "John" lastname = "doe"/>
     </div>

     <div>
      <GetProductsButton onFetch={() => console.log('Fetching products...')} />
      <ProductList/>
     </div>
    </>
  )
}

export default App
