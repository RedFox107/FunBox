import React from 'react';
import s from './App.module.css';
import Product from "./Components/Product/Product";

const App:React.FC = ()=> {
  return (
    <div className={s.root}>
        <h1>Ты сегодня покормил кота?</h1>
        <main>
            <article>
                <Product/>
                <Product/>
                <Product/>
            </article>
        </main>
    </div>
  );
}



export default App;
