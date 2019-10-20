import React from 'react'
import PropTypes from 'prop-types'

const Product = props => {
    return (
        <section className="product">
            <figure>
                <img className="imagen" src={props.imagen} alt={props.nombre}/>
            </figure>
            <div className="text">
                <h2 className="nombre">{props.nombre}</h2>
                <div className="precio"><strong>Precio: </strong>{props.precio}</div>
                <div className="cantidad"><strong>Cantidad: </strong>{props.cantidad} Unidades</div>
            </div>
        </section>
    )
}

Product.propTypes = {
    nombre: PropTypes.string
}

export default Product
