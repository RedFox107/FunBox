import React, {useEffect} from 'react';
import s from './App.module.css';
import {IProduct, IStateProductResucer,setDataAC} from "./Redux/reducers/productReducer";
import {connect, RootStateOrAny} from "react-redux";
import Products from "./Components/Products/Products";

const Data:IProduct[] = [
    {
        id:0,
        inStock:true,
        portionWeight:0.5,
        mouseCount:1,
        portion:10,
        filling:"фуа-гра",
        description:"Печень утки разварная с артишоками.",
        cartTopDescription:"Сказочное заморское яство",
        additionalText:""
    },
    {
        id:1,
        inStock:true,
        portionWeight:2,
        mouseCount:2,
        portion:40,
        filling:"рыбой",
        description:"Головы щучьи с чесноком да свежайшая сёмгушка.",
        cartTopDescription:"Сказочное заморское яство",
        additionalText:""
    },
    {
        id:2,
        inStock:false,
        portionWeight:5,
        mouseCount:5,
        portion:100,
        filling:"курой",
        description:"Филе из цыплят с трюфелями в бульоне.",
        cartTopDescription:"Сказочное заморское яство",
        additionalText:"Заказчик доволен"
    }
]


interface IAppProps {
    setDataAC:Function,
    prod:IStateProductResucer;
}

const App:React.FC<IAppProps> = ({setDataAC,prod})=> {
    /*Временное решение, из-за отсутсвия API*/
    useEffect(()=>{
        setDataAC(Data);
    },[Data])
    const {products,selected} = prod;
    if(products===null)
        return <div>Loading</div>
     /*------------------------------*/
  return (
    <div className={s.root}>
        <h1>Ты сегодня покормил кота?</h1>
        <main>
            <Products products={products as Array<IProduct>} selected={selected}/>
        </main>
    </div>
  );
}




export default connect(
    (state:RootStateOrAny)=>({prod:state.ProductReducer}),
    {setDataAC})
(App);
