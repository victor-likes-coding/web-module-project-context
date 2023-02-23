import React, { useContext } from "react";

// Components
import Product from "./Product";
import { ProductContext } from "../contexts/ProductContext";

const Products = (props) => {
    const {} = useContext(ProductContext);
    return (
        <div className="products-container">
            {props.products.map((product) => (
                <Product
                    key={product.id}
                    product={product}
                    addItem={props.addItem}
                />
            ))}
        </div>
    );
};

export default Products;
