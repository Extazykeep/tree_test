import { useState } from 'react';

import { Button } from '@/components/button';
import { ModalWindow } from '@/components/modal-window';
import { baseUrl, treeName } from '@/constants';
import { useFetch, useModalContext } from '@/hooks';
import { ModalProps } from '@/types';

export const EditDialog = ({ onSuccess }: ModalProps) => {
    const { modalProps, hideModal } = useModalContext();
    const [nodeName, setNodeName] = useState(modalProps?.name);
    const { error, isLoading, sendRequest } = useFetch<Node>(
        baseUrl + `api.user.tree.node.rename?treeName=${treeName}&nodeId=${modalProps?.id}&newNodeName=${nodeName}`,
        {
            method: 'POST',
        },
        true
    );

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        sendRequest().then(() => {
            onSuccess();
            hideModal();
        });
    };

    return (
        <ModalWindow
            title="Edit"
            isOpen={true}
            onClickOutside={hideModal}
            footerActions={
                <>
                    <Button variant="primary-outline" onClick={hideModal}>
                        Cancel
                    </Button>
                    <Button variant="secondary-outline" form="create-form">
                        Rename
                    </Button>
                </>
            }
        >
            {isLoading && <div>Loading...</div>}
            {!isLoading && error && <div>{error?.data?.message}</div>}
            {!error && (
                <form onSubmit={handleSubmit} id="create-form">
                    <input
                        type="text"
                        value={nodeName}
                        onChange={(e) => {
                            setNodeName(e.target.value);
                        }}
                        placeholder="Node name"
                    />
                </form>
            )}
        </ModalWindow>
    );
};
