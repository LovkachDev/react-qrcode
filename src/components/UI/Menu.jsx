import React, { useRef , useState } from 'react';
import "./Menu.css";
import QRCode from "react-qr-code";
import ReactDOM from 'react-dom';

export default function Menu() {
    const [value , setValue] = useState();
    const output = useRef();
    let size = 200;
    if (window.innerWidth < 400)
    {
        size = 150;
    }
    console.log(size)
    const getCode = () =>{
        ReactDOM.render(<QRCode value={value} size = {size} />, output.current);
        output.current.style.display = "flex";
    }
  return (
    <div className='main flex jcc aic'>
        <div className='container'>
            <header className='flex jcc'>
                <span className = 'title'>qr-code generator</span>
            </header>
            <div className='description'>
                Мини приложение для быстрого и удобного создания желаемого qr-кода
            </div>
            <div className='input__area flex aic'>
                <input className='input' placeholder='Введите словосочетание' onInput={event => setValue(event.target.value)} />
                <button className='button' onClick = {getCode} >Создать</button>
            </div>
            <div className='qrcode flex jcc' ref = {output}>
                
            </div>
        </div>
    </div>
    );
}
