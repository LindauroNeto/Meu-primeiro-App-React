function Footer() {
    
    return(
        <div className="corFundoRod">
            <footer id="rodapé">
                <h3 className="tituloRod">Entre em contato conosco!</h3>
                <p className="emailRod"><a href="mailto:ratatouilleempresas@gmail.com">RATATOUILLEEMPRESAS@GMAIL.COM</a></p>
                <address className="addresRod">500 Terry Francois Street, San Francisco, CA 94158</address>
                <p className="copyRod">&copy; {new Date().getFullYear()} Ratatouille</p>
            </footer>
        </div>
    );
}

export default Footer