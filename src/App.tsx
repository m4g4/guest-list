import { useCallback } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

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
                <Button icon circular size='massive' onClick={registeredGuestsClick} ><Icon name='users' /></Button>
                <Button icon circular size='massive' onClick={eventsClick} ><Icon name='calendar' /></Button>
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
