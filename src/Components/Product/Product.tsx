import React from "react";
import s from './Product.module.css';
import Cat from '../../imgs/Cat.png';


const Product: React.FC = () => {
    return (
        <section>
            <div className={s.border}>
                <div className={s.container}>
                    <img src={Cat} alt={"cat"}/>
                    <p>Сказочное заморское яство</p>
                    <h2><span>Нямушка</span> <span>с фуа-гра</span></h2>
                    <p><b>10</b> порций<br/> мышь в подарок</p>
                    <div className={s.servingWeight}><span>0,5</span> <span>кг</span></div>
                </div>
            </div>
            <p>Чего сидишь? Порадуй котэ, <span>купи.</span></p>
        </section>
    )
}

export default Product