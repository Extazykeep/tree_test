import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App.tsx';
import { SelectedProvider, ModalProvider } from './contexts';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ModalProvider>
            <SelectedProvider>
                <App />
            </SelectedProvider>
        </ModalProvider>
    </StrictMode>
);
