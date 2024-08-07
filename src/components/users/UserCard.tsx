import PublicImage from "../basic-ui/PublicImage";

export default function UserCard() {
    return (
        <div className="user-card">
            <div className="profile-image">
                <PublicImage src="user_image.png" />
            </div>
            <div className="user-info">
                <h4>Fernando Ávila</h4>
                <h6>Full Stack Developer</h6>
                {/* <section>
                        <span className="workplace"><i className="fa-solid fa-suitcase"></i>CCAA | WALDYR LIMA EDITAR LTDA.</span>
                        <span className="location"><i className="fa-solid fa-location-dot"></i>Rio de Janeiro, Brasil</span>
                    </section> */}
            </div>
            <ul className="user-links">
                <li><a href="mailto:avila@ofernandoavila.com" target="_blank" rel="noreferrer"><span>Enviar um e-mail</span></a></li>
                <li><a href="https://www.github.com/ofernandoavila" target="_blank" rel="noreferrer"><span>Meus projetos</span></a></li>
            </ul>
            <ul className="user-social">
                <li><a href="https://instagram.com/ofernandoavila" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="https://www.youtube.com/@ofernandoavila" target="_blank" rel="noreferrer"><i className="fa-brands fa-youtube"></i></a></li>
                <li><a href="https://www.linkedin.com/in/ofernandoavila" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a></li>
                <li><a href="https://www.github.com/ofernandoavila" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a></li>
            </ul>
        </div>
    );
}