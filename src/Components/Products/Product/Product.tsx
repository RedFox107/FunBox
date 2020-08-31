import React from "react";
import s from './Product.module.css';
import Cat from '../../../imgs/Cat.png';
import {IProduct, removeSelectAC, selectProductAC} from "../../../Redux/reducers/productReducer";
import {connect} from "react-redux";

interface IProductProps {
    product: IProduct,
    selected: boolean,
    selectProductAC(id:number):any,
    removeSelectAC:(id:number)=>any
}

type templateCreator = (temp: string) => string;
const create_OutOfStock_Template: templateCreator = (filling) => {
    return `Печалька, с ${filling} закончился`
};


const Product: React.FC<IProductProps> = ({product, selected,selectProductAC,removeSelectAC}) => {
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
    const clickHandler = ()=>{
        if(selected){
            removeSelectAC(id)
        }else{
            selectProductAC(id)
        }
    }
    return (
        <section>
            <div className={`${s.border} ${!inStock&&s.soldOut} ${selected&&s.selected}`} onClick={inStock?clickHandler:()=>{}}>
                <div className={s.container}>
                    {!inStock&&<div className={s.disabled}></div>}
                    <img src={Cat} alt={"cat"}/>
                    <p>{cartTopDescription}</p>
                    <h2><span>Нямушка</span> <span>с {filling}</span></h2>
                    <p><b>{portion}</b> порций<br/>{mouseCount} мышь в подарок{additionalText &&
                    <span><br/>{additionalText}</span>}</p>
                    <div className={s.servingWeight}><span>{portionWeight}</span> <span>кг</span></div>
                </div>
            </div>
            <BottomText clickHandler={clickHandler} selected={selected} description={description} filling={filling} inStock={inStock}/>
        </section>
    )
}


interface IBottomTextProps {
    selected: boolean,
    inStock: boolean,
    description: string,
    filling:string,
    clickHandler:React.MouseEventHandler
}
type elOrStr = React.ReactElement|string
const BottomText: React.FC<IBottomTextProps> = ({selected, inStock, description,filling,clickHandler}) => {
    let defaultText:elOrStr = <>Чего сидишь? Порадуй котэ, <span onClick={clickHandler}>купи.</span></>
    if (!inStock) {
        defaultText = create_OutOfStock_Template(filling)
    }else if(selected){
        defaultText = description
    }
    return (
        <p>{defaultText}</p>
    )
}

export default connect(null,{selectProductAC,removeSelectAC})(Product)