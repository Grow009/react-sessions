
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import InfoContext from './context/InfoContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <InfoContext>
        <App />
    </InfoContext>

);
