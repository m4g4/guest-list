import { useState } from 'react';
import { Button, Icon } from 'semantic-ui-react';

import AddGuest from '../components/AddGuest';

import GuestList from '../components/GuestList';
import { Guest } from '../interfaces';
import './RegisteredGuestsPage.scss';

export default function RegisteredGuestsPage() {

    // TODO load this list from the server
    const initialGuests: Guest[] = [
        { firstName: 'Matko', lastName: 'Gaborkoo', email: 'm@m.sk' },
        { firstName: 'Anička', lastName: 'Repkovie', email: 'anicka@repkova.sk' },
        { firstName: 'Gabika', lastName: 'Bezákovie', email: 'gabika@bezakovie.sk' },
    ];

    const [addGuestVisible, setAddGuestVisible] = useState(false);
    const [guests, setGuests] = useState(initialGuests);

    const removeGuest = (guest: Guest) => {
        setGuests((current) =>
            current.filter((g) => g.email !== guest.email)
        );
    };

    const addGuest = (guest: Guest) => {
        setGuests([...guests, guest]);
        setAddGuestVisible(false);
    };

    const addGuestPanel = addGuestVisible ? <AddGuest onAdd={addGuest}></AddGuest> : undefined;

    const addGuestClick = () => {
        setAddGuestVisible(true);
    };

    return (
        <>
            <div className='registered-guests-page'>
                <GuestList guests={guests} removeGuest={removeGuest}></GuestList>
                <div className='registered-guests-controls'>
                    <Button icon circular size='massive' onClick={addGuestClick} ><Icon name='add user' /></Button>
                </div>
            </div>
            {addGuestPanel}
        </>
    );
}