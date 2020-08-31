import React, {useState} from "react";
import Product from "./Product/Product";
import {IProduct} from "../../Redux/reducers/productReducer";

interface IProductsProps {
    products:IProduct[];
    selected:number[];
}
const Products:React.FC<IProductsProps> = ({products,selected})=>{
    const [hovered,setHover]= useState<number[]>([])
    return (
        <article>
            {products.map(p=><Product
                key={p.id}
                product={p}
                selected={selected.includes(p.id)}
                setHover={setHover}
                hovered={hovered}
            />)}
        </article>
    )
}

export default Products