import Card from "../basic-ui/Card";
import PublicImage from "../basic-ui/PublicImage";

export default function UserCard() {
    return (
        <Card>
            <div className="user-card">
                <div className="profile-image">
                    <PublicImage src="user_image.png" />
                </div>
                <div className="user-info">
                    <h4>Fernando Ávila</h4>
                    <h6>Full Stack Developer</h6>
                    <section>
                        <span className="location"><i className="fa-solid fa-location-dot"></i>Rio de Janeiro, Brasil</span>
                        <span className="workplace"><i className="fa-solid fa-suitcase"></i>CCAA | WALDYR LIMA EDITAR LTDA.</span>
                    </section>
                </div>
                <ul className="user-social">
                    <li><a href="https://instagram.com/ofernandoavila" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href="https://www.youtube.com/@ofernandoavila" target="_blank" rel="noreferrer"><i className="fa-brands fa-youtube"></i></a></li>
                    <li><a href="https://www.github.com/ofernandoavila" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/ofernandoavila" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a></li>
                    <li><a href="https://www.behance.com/ofernandoavila" target="_blank" rel="noreferrer"><i className="fa-brands fa-behance"></i></a></li>
                    <li><a href="mailto:avila@ofernandoavila.com" target="_blank" rel="noreferrer"><i className="fa fa-envelope"></i></a></li>
                </ul>
            </div>
        </Card>
    );
}