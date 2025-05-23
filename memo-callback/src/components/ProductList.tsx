import {  useCallback, useState, useEffect } from "react"
import GetProductsButton from "./GetProductsButton";

type ProductList = {
    id:number,
    productName:string,

}

const ProductList = () => {
    const [products,  setProducts] = useState([]);

    const fetchProducts = useCallback(async () => {
        try{
            const res = await fetch(`https://dummyjson.com/products`)
            const data = await res.json()
            setProducts(data)
        } catch(err){
            console.error(err)
        }
    }, [])
    useEffect(() => {
        fetchProducts()
    }, [])
  return (
    <div>
      <h3>Product:{products}</h3>
    </div>
  )
}

export default ProductList
