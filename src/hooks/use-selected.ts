import { useContext } from 'react';

import { SelectedContext } from '@/contexts';

export const useSelected = () => {
    const context = useContext(SelectedContext);
    if (!context) {
        throw new Error('useSelected must be used within a SelectedProvider');
    }
    return context;
};
