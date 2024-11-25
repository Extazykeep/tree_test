import { ReactNode } from 'react';

type ModalWindowProps = {
    isOpen: boolean;
    children: ReactNode;
    title?: string;
    footerActions: ReactNode;
    onClickOutside?: () => void;
};

export const ModalWindow = ({ title, isOpen, footerActions, onClickOutside, children }: ModalWindowProps) => {
    if (!isOpen) return null;

    return (
        <>
            <div className="modal">
                <div className="modal-inner">
                    {title && (
                        <div className="modal-header">
                            <div>{title}</div>
                        </div>
                    )}
                    <div className="modal-body">{children}</div>
                    {footerActions && <div className="modal-footer">{footerActions}</div>}
                </div>
            </div>
            <div className="modal-backdrop" onClick={onClickOutside}></div>;
        </>
    );
};
