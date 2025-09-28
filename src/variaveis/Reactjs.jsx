import '../App.css'
import Card from "./Card"
import im from "../img/reactjs.png"
function Reactjs(){
    return(
        <>
           <section className="projeto1">
                <div className="centraliza">
                    <h3>projetos em react-js</h3>
                </div>
                <div className='card'>
                    <Card nome="consecionaria" rec={im} link={'https://samueltz24.github.io/conce/'}/>
                </div>
           </section>
        </>
    )
}

export default Reactjs 