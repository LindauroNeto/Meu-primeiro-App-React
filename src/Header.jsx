import ratatatouilleIcon from "./assets/ratatouille_icon.svg";

function Header() {
    
    return(
        <header id="cabecalho">
            <nav className="navBar">
                <div className="abaTituloNav">
                    <h1 id="titulo-principal">Ratatouille</h1>
                    <img src={ratatatouilleIcon} />
                </div>
                <ul className="itemNavBar">
                    <li className="itensNav"><a href="#">Home</a></li>
                    <li className="itensNav"><a href="#">Receitas</a></li>
                    <li className="itensNav"><a href="#">Consultas</a></li>
                    <li className="itensNav"><a href="#">Sobre</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header