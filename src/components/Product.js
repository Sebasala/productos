import React from 'react'
import PropTypes from 'prop-types'

// Functions
import formatAsPrice from '../functions/formatAsPrice'

const Product = props => {
    const precioFormateado = formatAsPrice(props.precio);
    const categorias = props.categorias.join(", ");

    return (
        <section className="product">
            <figure>
                <img className="imagen" src={props.imagen} alt={props.nombre}/>
            </figure>
            <div className="text">
                <h2 className="nombre">{props.nombre}</h2>
                <div className="precio"><strong>Precio: </strong>{precioFormateado}</div>
                <div className="cantidad"><strong>Cantidad: </strong>{props.cantidad} Unidades</div>
                <div className="categorias"><strong>Categorías: </strong> {categorias}</div>
            </div>
        </section>
    )
}

Product.propTypes = {
    nombre: PropTypes.string,
    imagen: PropTypes.string,
    precio: PropTypes.number,
    cantidad: PropTypes.number,
    categorias: PropTypes.array
}

export default Product
