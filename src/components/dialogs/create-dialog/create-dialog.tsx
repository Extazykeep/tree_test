import { useState } from 'react';

import { Button } from '@/components/button';
import { ModalWindow } from '@/components/modal-window';
import { baseUrl, treeName } from '@/constants';
import { useFetch, useModalContext } from '@/hooks';
import { ModalProps } from '@/types';

export const CreateDialog = ({ onSuccess }: ModalProps) => {
    const { modalProps, hideModal } = useModalContext();
    const [nodeName, setNodeName] = useState('');
    const { error, isLoading, sendRequest } = useFetch<Node>(
        baseUrl + `api.user.tree.node.create?treeName=${treeName}&parentNodeId=${modalProps?.id}&nodeName=${nodeName}`,
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
            title="Create"
            isOpen={true}
            onClickOutside={hideModal}
            footerActions={
                <>
                    <Button variant="primary-outline" onClick={hideModal}>
                        Cancel
                    </Button>
                    {!error && (
                        <Button variant="secondary-outline" form="create-form">
                            Add
                        </Button>
                    )}
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
