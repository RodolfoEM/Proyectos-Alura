import "./Footer.css"

const Footer = () => {
    // En Este caso se usa el BackgroundImage aquí ya que cuando se coloca una "/" aquí sí sabe en dónde buscar el recurso(carpeta public) y en css no sabe
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.aluracursos.com/'>
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src="/img/twitter.png" alt='twitter' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Alura</strong>
    </footer>
}

export default Footer