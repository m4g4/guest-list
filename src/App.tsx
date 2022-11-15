import { useCallback, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

import './App.scss';
import Home from './pages/Home';
import RegisteredGuestsPage from './pages/RegisteredGuestsPage';
import EventListPage from './pages/EventListPage';
import EventPage from './pages/EventPage';
import { Guest } from './interfaces';
import AddGuest from './components/AddGuest';


function App() {

    const initialGuests: Guest[] = [];

    const [guests, setGuests] = useState(initialGuests);
    const [addGuestVisible, setAddGuestVisible] = useState(false);

    const addGuest = (guest: Guest) => {
        setGuests([...guests, guest]);
        setAddGuestVisible(false);
    };

    const addGuestPanel = addGuestVisible ? <AddGuest onAdd={addGuest} onCancel={() => setAddGuestVisible(false)}></AddGuest> : undefined;

    const addGuestClick = () => {
        setAddGuestVisible(true);
    };

    const navigate = useNavigate();
    const registeredGuestsClick = useCallback(() => navigate('/registered-guests', { replace: true }), [navigate]);
    const eventsClick = useCallback(() => navigate('/event-list', {replace: true}), [navigate]);

    return (
        <div className="App">
            <header className="main-navigation">
                <Button icon circular size='massive' onClick={addGuestClick}><Icon name='add user' /></Button>
                <Button icon circular size='massive' onClick={registeredGuestsClick} ><Icon name='users' /></Button>
                <Button icon circular size='massive' onClick={eventsClick} ><Icon name='calendar' /></Button>
            </header>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/registered-guests' element={<RegisteredGuestsPage guests={guests} setGuests={setGuests} />} />
                <Route path='/event-list' element={<EventListPage />} />
                <Route path='/event/:id' element={<EventPage guests={guests} />} />
            </Routes>

            {addGuestPanel}
        </div>
    );
}

export default App;
