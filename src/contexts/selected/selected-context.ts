import { Node } from '@/types';
import { createContext } from 'react';

type SelectedContextType = {
    selected: Node | null;
    setSelected: (node: Node | null) => void;
};

export const SelectedContext = createContext<SelectedContextType | null>(null);
