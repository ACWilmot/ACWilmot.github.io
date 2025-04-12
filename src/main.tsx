
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create root only when document is ready
const renderApp = () => {
  const rootElement = document.getElementById("root");
  
  if (rootElement) {
    createRoot(rootElement).render(<App />);
  } else {
    console.error("Root element not found");
  }
};

// Check if document is already loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderApp);
} else {
  // Document already loaded, render immediately
  renderApp();
}
