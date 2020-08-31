import React from "react";
import s from "../Product.module.css";

interface IBottomTextProps {
    selected: boolean,
    inStock: boolean,
    description: string,
    filling: string,
    clickHandler: React.MouseEventHandler
}

type elOrStr = React.ReactElement | string
type templateCreator = (temp: string) => string;

const create_OutOfStock_Template: templateCreator = (filling) => {
    return `Печалька, с ${filling} закончился`
};
const BottomText: React.FC<IBottomTextProps> = ({selected, inStock, description, filling, clickHandler}) => {
    let defaultText: elOrStr = <>Чего сидишь? Порадуй котэ, <span onClick={clickHandler}>купи.</span></>
    if (!inStock) {
        defaultText = create_OutOfStock_Template(filling)
    } else if (selected) {
        defaultText = description
    }
    return (
        <p className={!inStock ? s.soldOutYellowText : ''}>{defaultText}</p>
    )
}


export default BottomText