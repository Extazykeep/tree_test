import { ChevronRight, Pencil, PlusCircle, Trash } from '@/icons';

import { Node } from '@/types';

type TreeItemProps = {
    data: Node;
    isOpen?: boolean;
    isSelected?: boolean;
    onClick?: () => void;
    onAdd: () => void;
    onEdit: () => void;
    onDelete: () => void;
};

export const TreeItem = ({ data, isOpen, isSelected, onClick, onAdd, onEdit, onDelete }: TreeItemProps) => {
    return (
        <div onClick={onClick} className={`tree-item ${isSelected ? 'selected' : ''}`}>
            <span>
                {Boolean(data.children.length) && (
                    <ChevronRight style={{ transform: !isOpen ? 'rotate(-90deg)' : '' }} />
                )}
            </span>
            {data.name}
            {isSelected && (
                <div className="tree-item-actions" onClick={(e) => e.stopPropagation()}>
                    <PlusCircle width={16} onClick={onAdd} />
                    <Pencil width={16} onClick={onEdit} />
                    <Trash width={16} onClick={onDelete} />
                </div>
            )}
        </div>
    );
};
