import { createContext, ReactNode, useState } from "react";
import Modal from "../Modal";

interface ModalContextData {
    isModalOpen: boolean;
    modalContent: JSX.Element | null;
    openModal: (element: JSX.Element) => void;
    closeModal: () => void;
}

interface ModalContextProviderProps {
    children: ReactNode;
}

export const ModalContext = createContext({} as ModalContextData);

export default function ModalContextProvider({ children }: ModalContextProviderProps) {
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState<JSX.Element | null>(null);

    const openModal = (element: JSX.Element) => {
        setModalContent(element);
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setModalContent(null);
        setIsModalOpen(false);
    }
    
    return (
        <ModalContext.Provider value={{ isModalOpen, closeModal, modalContent, openModal }} >
            <Modal />
            { children }
        </ModalContext.Provider>
    );
}