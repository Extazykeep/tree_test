import { MODAL_TYPES, ModalType } from '@/contexts';
import { ConfirmationDialog, CreateDialog, EditDialog } from '@/components/dialogs';

type ModalByTypeProps = { type: ModalType; onSuccess: () => void };

export const ModalByType = ({ type, onSuccess }: ModalByTypeProps) => {
    switch (type) {
        case MODAL_TYPES.CREATE_MODAL:
            return <CreateDialog onSuccess={onSuccess} />;
        case MODAL_TYPES.DELETE_MODAL:
            return <ConfirmationDialog onSuccess={onSuccess} />;
        case MODAL_TYPES.UPDATE_MODAL:
            return <EditDialog onSuccess={onSuccess} />;
        default:
            return null;
    }
};
