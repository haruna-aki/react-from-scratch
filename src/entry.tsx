import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './app.css';
import { App } from './App';

createRoot(document.getElementById('app')).render(
    <StrictMode>
        <App />
    </StrictMode>
);

// const app = document.getElementById("app");
// const root = ReactDOM.createRoot(app);
    
// root.render(<App />)