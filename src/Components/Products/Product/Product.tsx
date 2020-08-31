import React from "react";
import s from './Product.module.css';
import Cat from '../../../imgs/Cat.png';
import {IProduct, removeSelectAC, selectProductAC} from "../../../Redux/reducers/productReducer";
import {connect} from "react-redux";
import PortionAndMouse from "./PortionAndMouse/PortionAndMouse";
import BottomText from "./BottomText/BottomText";

interface IProductProps {
    product: IProduct;
    selected: boolean;
    selectProductAC(id: number): any;
    removeSelectAC: (id: number) => any;
    setHover:any,
    hovered:number[]
}


const Product: React.FC<IProductProps> = ({hovered ,setHover,product, selected, selectProductAC, removeSelectAC}) => {
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

    const clickHandler = () => {
        if (selected) {
            removeSelectAC(id)
        } else {
            selectProductAC(id)
        }
        setHover((prev:number[])=>prev.filter(e=>e!==id));
    }
    const mouseLeaveHandler:React.MouseEventHandler = (e)=>{
        setHover((prev:number[])=>[...prev,id]);
        e.currentTarget.classList.add(s.hover);
    }

    //flags
    const wasHover = hovered.includes(id);
    const selectedHoveredAndInStock = wasHover&&inStock&&selected

    return (
        <section>
            <div
                className={`${s.border} ${!inStock && s.soldOut} ${selected && s.selected}`}
                onClick={inStock ? clickHandler : () => {
                }}
                onMouseLeave={mouseLeaveHandler}
            >
                <div className={s.container}>


                    {!inStock && <div className={s.disabled}></div>}

                    <img src={Cat} alt={"cat"}/>

                    <p className={(selectedHoveredAndInStock)?s.hoveredAndSelectCartTopDesc:""}>
                        {(selectedHoveredAndInStock)?"Котэ не одобряет?":cartTopDescription}
                    </p>

                    <h2><span>Нямушка</span> <span>с {filling}</span></h2>

                    <PortionAndMouse additionalText={additionalText} mouseCount={mouseCount} portion={portion}/>

                    <div className={s.servingWeight}><span>{portionWeight}</span><span>кг</span></div>
                </div>
            </div>
            <BottomText clickHandler={clickHandler} selected={selected} description={description} filling={filling}
                        inStock={inStock}/>
        </section>
    )
}




export default connect(null, {selectProductAC, removeSelectAC})(Product)