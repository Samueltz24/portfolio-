import css from "../img/css.png"
import html from "../img/html.png"
import java from "../img/java.png"
function Card({nome,rec,link}){
    return(
        <>
            <div className="cardfi">
                <div className="pro">
                    <div className="foto">
                        <div className="hcj">
                            <img className="ima" src={css} alt="" />
                        </div>
                        <div className="hcj">
                            <img className="ima" src={html} alt="" />
                        </div>
                        <div className="hcj">
                            <img className="ima" src={java} alt="" />
                        </div>

                        <div className="hcj">
                            <img className="ima" src={rec} alt="" />
                        </div>
                    </div>
                </div>
                <div className="nomep">
                    <h3>{nome}</h3>
                </div>
                <div className="acessa">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <button className="ace">acessa</button>
                    </a>
                </div>
            </div>
        </>
    )
}
export default Card