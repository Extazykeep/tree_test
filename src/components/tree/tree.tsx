import { useState } from 'react';

import { useModalContext, useSelected } from '@/hooks';
import { Node } from '@/types';
import { TreeItem } from './tree-item';

type TreeProps = {
    data: Node;
    level: number;
};

export const Tree = ({ data, level }: TreeProps) => {
    const { showModal } = useModalContext();
    const [isOpen, setIsOpen] = useState(false);

    const { selected, setSelected } = useSelected();

    const hasChildren = Boolean(data.children);

    const isSelected = selected?.id === data.id;

    const handleClick = () => {
        setSelected(data);
        setIsOpen((prev) => !prev);
    };

    const handleDelete = () => {
        showModal('DELETE_MODAL', data);
    };
    const handleEdit = () => {
        showModal('UPDATE_MODAL', data);
    };

    const handleAdd = () => {
        showModal('CREATE_MODAL', data);
    };

    return (
        <div className="tree-item-wrapper">
            <TreeItem
                onClick={handleClick}
                data={data}
                isOpen={isOpen}
                isSelected={isSelected}
                onAdd={handleAdd}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
            {isOpen && (
                <div>
                    {hasChildren &&
                        data.children.map((child) => <Tree key={child.id} data={child} level={level + 1} />)}
                </div>
            )}
        </div>
    );
};
