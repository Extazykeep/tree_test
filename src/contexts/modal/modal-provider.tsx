import { ReactNode, useState } from 'react';

import { ModalContext, ModalType } from './modal-context';
import { Node } from '@/types';

type ModalProviderProps = {
    children: ReactNode;
};

export const ModalProvider = ({ children }: ModalProviderProps) => {
    const [modalType, setModalType] = useState<ModalType | null>(null);
    const [modalProps, setModalProps] = useState<Node | null>(null);

    const showModal = (type: ModalType, node: Node | null) => {
        setModalType(type);
        setModalProps(node);
    };

    const hideModal = () => {
        setModalType(null);
        setModalProps(null);
    };

    return (
        <ModalContext.Provider value={{ modalType, modalProps, showModal, hideModal }}>
            {children}
        </ModalContext.Provider>
    );
};
