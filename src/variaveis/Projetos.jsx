import Card from "./Card"
function Projetos(){
    return(
        <>
            <section className="projetos">
                <div className="centraliza">
                    <h3>projetos em html puro</h3>
                </div>
                <div className="card">
                    <Card nome="numbak" link={'https://samueltz24.github.io/Nufake/'}/>
                    <Card nome="Supermecado" link={' https://samueltz24.github.io/Supermecadotz/'}/>
                    <Card nome="calculadora" link={'https://samueltz24.github.io/test/'}/>
                    <Card nome="jogo da forca" link={'https://samueltz24.github.io/JogoDaforca/'}/>
                    <Card nome="joquepo" link={' https://samueltz24.github.io/joquempo/'}/>
                </div>
            </section>
        </>
    )
} 

export default Projetos 