import useModal from "../../modal/hooks/useModal";
import MainMenuContent from "./MainMenuContent";

export default function MainMenu() {

    const { HandleOpenModal } = useModal();

    const OpenMenu = () => {
        HandleOpenModal(<MainMenuContent />, "move")
    }

    return (
        <button onClick={OpenMenu} className=""><i className="icofont-duotone icofont-menu"></i></button>
    );
}