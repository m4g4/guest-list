import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

import AddEvent from '../components/AddEvent';

import EventList from '../components/EventList';
import { ChoirEvent } from '../interfaces';
import './EventListPage.scss';

export default function EventListPage() {

    // TODO load this list from the server
    const initialEvents: ChoirEvent[] = [
        { dateString: '1.1.2022', membershipFee: 45 },
    ];

    const [addEventVisible, setAddEventVisible] = useState(false);
    const [events, setEvents] = useState(initialEvents);

    const addEvent = (event: ChoirEvent) => {
        setEvents([...events, event]);
        setAddEventVisible(false);
    };

    const addEventPanel = addEventVisible ? <AddEvent onAdd={addEvent}></AddEvent> : undefined;

    const addEventClick = () => {
        setAddEventVisible(true);
    };

    const navigate = useNavigate();
    const eventsClick = (event: ChoirEvent) => navigate('/event/' + event.dateString, {replace: true});

    return (
        <>
            <div className='event-list-page'>
                <EventList events={events} onEventClick={eventsClick}></EventList>
                <div className='event-list-controls'>
                    <Button icon circular size='massive' onClick={addEventClick} ><Icon name='add' /></Button>
                </div>
            </div>
            {addEventPanel}
        </>
    );
}