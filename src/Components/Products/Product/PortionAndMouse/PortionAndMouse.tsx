import React from "react";

interface IPortionAndMouseProps {
    portion: number,
    mouseCount: number,
    additionalText: string
}
const PortionAndMouse: React.FC<IPortionAndMouseProps> = ({portion, mouseCount, additionalText}) => {
    let mouseText = "мышь";
    const modulo = mouseCount%10;
    if((modulo>4 || modulo===0) || (mouseCount>9&&mouseCount<21)){
        mouseText = "мышей"
    }else if(modulo<5 && modulo>1){
        mouseText = "мыши"
    }
    return (
        <>
            <p><b>{portion}</b> порций</p>
            <p>{mouseCount===1?"":mouseCount} {mouseText} в подарок</p>
            {additionalText && <p>{additionalText}</p>}

        </>
    )
}

export default PortionAndMouse