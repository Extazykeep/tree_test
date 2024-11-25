import { Node } from '@/types';
import { createContext } from 'react';

export const MODAL_TYPES = {
    CREATE_MODAL: 'CREATE_MODAL',
    DELETE_MODAL: 'DELETE_MODAL',
    UPDATE_MODAL: 'UPDATE_MODAL',
} as const;

export type ModalType = (typeof MODAL_TYPES)[keyof typeof MODAL_TYPES];

interface ModalContextProps {
    showModal: (type: ModalType, node: Node | null) => void;
    hideModal: () => void;
    modalType: ModalType | null;
    modalProps: Node | null;
}

export const ModalContext = createContext<null | ModalContextProps>(null);
