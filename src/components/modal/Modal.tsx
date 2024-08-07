import useModal from "./hooks/useModal";

export default function Modal() {

    const { isModalOpen, modalContent, closeModal } = useModal();

    if(!isModalOpen) return <></>;

    return (
        <div className="modal">
            <div className="background" onClick={ closeModal }></div>
            <div className="content">
                { modalContent }
            </div>
        </div>
    );
}