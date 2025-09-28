import '../App.css'
import samuka from "../img/samueltz.png"
function Apresentacao(){
    return(
        <>
        <section className="apresentacao">
            <div className='separa'>
                <div className='eu'>
                    <h2>portifolio</h2>
                </div>
                <div className='eu'>
                    <img className='ima' src={samuka} alt="" />
                </div>
            </div>
        </section>
        </>
    )
}
export default Apresentacao 