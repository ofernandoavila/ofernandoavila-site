import Logo from "../../logo/Logo";
import useModal from "../../modal/hooks/useModal";

export default function MainMenuContext() {

    const { HandleCloseModal } = useModal();

    return (
        <div className="main-menu-content">
            <div className="btn-fechar" onClick={HandleCloseModal}><i className="fa fa-times"></i></div>
            <Logo />
            <nav className="main-menu-nav">
                <ul>
                    <li className="ativo">Home</li>
                    <li>Test 1</li>
                    <li>Features</li>
                    <li>Contact</li>
                    <li>Shop</li>
                </ul>
            </nav>
            <button className="btn btn-primary">Subscribe</button>
        </div>
    );
}