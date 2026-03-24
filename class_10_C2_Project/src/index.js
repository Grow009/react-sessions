
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import CardContext from './context/CardContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <CardContext>
        <BrowserRouter>
            <App />
        </BrowserRouter>


    </CardContext>




);


