import React from 'react'
import PropTypes from 'prop-types'

// Components
import Product from './Product'

function Products(props) {
    return (
        <ul className="products">
            {props.productos.map(producto => {
                return (
                    <li className="container--product">
                        <Product 
                            nombre={producto.nombre}
                            imagen={producto.imagen}
                            cantidad={producto.cantidad}
                            precio={producto.precio}
                            categorias={producto.categorias}
                        />
                    </li>
                )
            })}
        </ul>
    )
}

Products.propTypes = {
    products: PropTypes.array
}

export default Products

