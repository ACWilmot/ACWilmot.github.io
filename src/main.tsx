
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Wait for DOM to be ready before rendering
document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById("root");
  
  if (rootElement) {
    createRoot(rootElement).render(<App />);
  } else {
    console.error("Root element not found");
  }
});
