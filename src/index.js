import React from 'react';
import ReactDOM from 'react-dom/client';

// здесь jsX пишем НЕ html


const TEXT = 'text from const';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /* У элементов д.б. только один родительский эл-т
      Eсли надо несколько div, то надо все div обернуть в обёрточный div
<React.Fragment> (или <>) существует для ситуаций, когда 2 div д.б.рядом , но у них не д.б. обёртки */
  <React.Fragment>
    <div id='one' className="oneClass"> 
        {/* <div id='one' className = { 2 > 1 ? 'o' : 't'}> */}
        {/* <h1> Hello world! </h1> */}
        {/* <h1> { [1,2,3].map() } </h1> */}
        {/* <h1> { Math.random() > 0.9 ? <hr/> : <img alt='some image'/> } </h1> */}
        {/* Если не нужно возвращать картинку, то пишем : underfined или : null (?? жаждет найти u или n, но их НЕ выбирает) */}
        {/* Н-р: 2 ?? null(увидим 2), null ?? 2(увидим 2), underfined ?? null(увидим null) */}
        {/* в {} надо писать такое вычисление, кот. что-нибудь возвращает */}
      <h1> { TEXT } </h1> 
      {/* здесь внутри интерпретируем это как js, стопаем jsx */}
      <p>учусь на первом занятии</p>
      <hr/>
    </div>
    <div>
      <label htmlFor='inp'>click me</label>
      <input id='inp' type='text'/>
    </div>
  </React.Fragment>
);


