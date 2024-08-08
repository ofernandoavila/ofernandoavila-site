import PublicImage from "../basic-ui/PublicImage";

export default function Logo() {
    return (
        <div className="logo">
            <PublicImage src="user_image.png" />
            <h2 className="title-logo">ofernandoavila</h2>
        </div>
    );
}