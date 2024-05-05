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
                    <h6>Desenvolvedor Full-Stack</h6>
                </div>
                <ul className="user-social">
                    <li><a href="mailto:avila@ofernandoavila.com" target="_blank" rel="noreferrer"><i className="fa fa-envelope"></i></a></li>
                    <li><a href="https://instagram.com/ofernandoavila" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href="https://www.youtube.com/@ofernandoavila" target="_blank" rel="noreferrer"><i className="fa-brands fa-youtube"></i></a></li>
                    <li><a href="https://www.github.com/ofernandoavila" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a></li>
                </ul>
            </div>
        </Card>
    );
}