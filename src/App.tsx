import { useCallback } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import './App.scss';
import Home from './pages/Home';
import RegisteredGuestsPage from './pages/RegisteredGuestsPage';
import EventListPage from './pages/EventListPage';
import EventPage from './pages/EventPage';


function App() {

    const navigate = useNavigate();
    const registeredGuestsClick = useCallback(() => navigate('/registered-guests', { replace: true }), [navigate]);
    const eventsClick = useCallback(() => navigate('/event-list', {replace: true}), [navigate]);

    return (
        <div className="App">
            <header className="main-navigation">
                <button className="circular ui massive icon button" onClick={registeredGuestsClick}>
                    <i className="icon users"></i>
                </button>
                <button className="circular ui massive icon button" onClick={eventsClick}>
                    <i className="icon calendar"></i>
                </button>
            </header>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/registered-guests' element={<RegisteredGuestsPage />} />
                <Route path='/event-list' element={<EventListPage />} />
                <Route path='/event/:id' element={<EventPage />} />
            </Routes>
        </div>
    );
}

export default App;
