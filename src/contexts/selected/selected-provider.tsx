import { ReactNode, useState } from 'react';

import { SelectedContext } from './selected-context';
import { Node } from '@/types';

type SelectedProviderProps = {
    children: ReactNode;
};

export const SelectedProvider = ({ children }: SelectedProviderProps) => {
    const [selected, setSelected] = useState<Node | null>(null);

    return <SelectedContext.Provider value={{ selected, setSelected }}>{children}</SelectedContext.Provider>;
};
