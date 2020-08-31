import React from "react";
import s from './Product.module.css';
import Cat from '../../../imgs/Cat.png';
import {IProduct} from "../../../Redux/reducers/productReducer";

interface IProductProps {
    product:IProduct,
    selected:boolean
}

const Product: React.FC<IProductProps> = ({product}) => {
    const {
        description,
        filling,
        id,
        inStock,
        mouseCount,
        portion,
        portionWeight,
        cartTopDescription,
        additionalText
    } = product;
    return (
        <section>
            <div className={s.border}>
                <div className={s.container}>
                    <img src={Cat} alt={"cat"}/>
                    <p>{cartTopDescription}</p>
                    <h2><span>Нямушка</span> <span>с {filling}</span></h2>
                    <p><b>{portion}</b> порций<br/>{mouseCount} мышь в подарок{additionalText&&<span><br/>{additionalText}</span>}</p>
                    <div className={s.servingWeight}><span>{portionWeight}</span> <span>кг</span></div>
                </div>
            </div>
            <p>Чего сидишь? Порадуй котэ, <span>купи.</span></p>
        </section>
    )
}

export default Product