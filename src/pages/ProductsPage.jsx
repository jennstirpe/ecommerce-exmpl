import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import products from "../products.json"

import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import GlobalStyles from "../components/Global"
import ProductThumbnail from "./ProductThumbnail"
import { StyledProducts } from "./styled/ProductsPage.styled"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "../themes"


export default function ProductsPage() {
    const [ allProducts, setAllProducts ] = useState();

    useEffect(() => {
        setAllProducts(products);
        
        if(allProducts) {
            console.log(allProducts)
        }
    }, [])

  return (
    <ThemeProvider theme={lightTheme}>
        <>
        <GlobalStyles />
        <div>
            <Header />

            <StyledProducts className="article">
                <h2>Products</h2>

                <section className="filters">
                    <ul className="filters-list">
                        <li><button>All</button></li>
                        <li><button>Price (low to high)</button></li>
                        <li><button>Price(high to low)</button></li>
                    </ul>
                </section>

                <section className="products">
                    <ul className="products-list">
                    {
                        allProducts ? (
                            allProducts.map(product => {
                                return <li key={product.id}><Link className="product-link" to="/"><ProductThumbnail product={product} /></Link></li>
                            })
                        ) : (
                            <p>SPINNER</p>
                        )
                    }
                    </ul>
                </section>
            </StyledProducts>

            <Footer />
        </div>
        </>
    </ThemeProvider>
  )
}
