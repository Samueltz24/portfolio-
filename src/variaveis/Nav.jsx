import '../App.css'
import desligar from '../img/desligar.png'
import ligar from '../img/ligar.png'
function Nav(){
    function Ligar(){
         let ligar = document.getElementById('ligar')
         let desligar=document.getElementById('desligar')
         let na = document.getElementById('na')
         let card = document.querySelectorAll('.cardf')
         let pro = document.querySelectorAll('.progresso1')
         desligar.style.display='block'
         ligar.style.display='none'
         co1.style.background='#333333'
         projetos.style.background="#333333"
         na.style.background ='linear-gradient(to right,#333333,#F4F4F4)'
        card.forEach(cardf =>{
            cardf.style.background='#333333'
         })
          pro.forEach(progresso1 =>{
            progresso1.style.background='#000'
         })
         
    }
    function Desligar(){
        let desligar=document.getElementById('desligar')
        let ligar = document.getElementById('ligar')
        let co1 = document.getElementById('co1')
        let projetos= document.getElementById('projetos')
        let card = document.querySelectorAll('.cardf')
        let pro = document.querySelectorAll('.progresso1')
        ligar.style.display='block'
        desligar.style.display='none'
        co1.style.background ='linear-gradient(to left,#0D1B2A,#1B6E66)'
        projetos.style.background ='linear-gradient(to right,#333333,#1B6E66)'
        na.style.background='linear-gradient(to left,#1B6E66,#fff)'
         card.forEach(cardf =>{
            cardf.style.background='#1B6E66'
         })
         pro.forEach(progresso1 =>{
            progresso1.style.background='#333333'
         })
    }
    return(
        <>
            <nav className="navp" id='na'>
                <div className="nav">
                    <div className="logo lo">
                        <h1>samuel tz</h1>
                    </div>
                 <div id="ligar" className='lo' onClick={Ligar}>
                    <img src={desligar} alt="" />
                 </div>
                 <div id="desligar" className='lo' onClick={Desligar}>
                    <img src={ligar} alt="" />
                 </div>
                </div>
            </nav>
        </>
    )
}

export default Nav