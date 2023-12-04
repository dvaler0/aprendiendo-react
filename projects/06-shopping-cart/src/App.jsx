import { useState } from "react"
import { Products } from "./components/Products"
import { products as initialProducts } from './mocks/products.json'
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { useFilters } from "./hooks/useFilters"
import { Cart } from "./components/Cart"

function App () {
  const [products] = useState(initialProducts)
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header />
      <Cart />
      <Products products={filteredProducts}/> 
      <Footer />
    </> 
  )
}

export default App
