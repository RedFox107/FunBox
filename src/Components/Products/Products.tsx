import React from "react";
import Product from "./Product/Product";
import {IProduct} from "../../Redux/reducers/productReducer";

interface IProductsProps {
    products:IProduct[];
    selected:number[];
}
const Products:React.FC<IProductsProps> = ({products,selected})=>{
    return (
        <article>
            {products.map(p=><Product
                key={p.id}
                product={p}
                selected={selected.includes(p.id)}
            />)}
        </article>
    )
}

export default Products