import { Button, ModalWindow } from '@/components';
import { baseUrl, treeName } from '@/constants';
import { useFetch, useModalContext } from '@/hooks';
import { ModalProps, Node } from '@/types';

export const ConfirmationDialog = ({ onSuccess }: ModalProps) => {
    const { modalProps, hideModal } = useModalContext();

    const { error, isLoading, sendRequest } = useFetch<Node>(
        baseUrl + `api.user.tree.node.delete?treeName=${treeName}&nodeId=${modalProps?.id}`,
        {
            method: 'POST',
        },
        true
    );

    return (
        <ModalWindow
            title="Delete"
            isOpen={true}
            onClickOutside={hideModal}
            footerActions={
                <>
                    <Button variant="primary-outline" onClick={hideModal}>
                        Cancel
                    </Button>
                    {!error && (
                        <Button
                            variant="secondary-outline"
                            onClick={() => {
                                sendRequest().then(() => {
                                    onSuccess();
                                    hideModal();
                                });
                            }}
                        >
                            Delete
                        </Button>
                    )}
                </>
            }
        >
            {isLoading && <div>Loading...</div>}
            {!isLoading && error && <div>{error?.data?.message}</div>}
            {!error && <div> Do you want to delete {modalProps?.name}?</div>}
        </ModalWindow>
    );
};
