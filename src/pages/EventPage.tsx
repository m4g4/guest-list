import { Button, Icon } from 'semantic-ui-react';

import './EventPage.scss';
import { useParams } from "react-router-dom";
import GuestList from '../components/GuestList';
import { Guest } from '../interfaces';
import { useState } from 'react';
import { useInput } from '../hooks/useInput';

export interface EventPageProps {
    guests: Guest[]
}

export default function EventPage({guests} : EventPageProps) {
    const { id } = useParams();

    const initialPayments: { [email: string]: number } = { "m@m.sk": 12 };

    const [payments, setPayments] = useState(initialPayments);
    const [searchValue, searchInput] = useInput({ placeholder: "Hľadať...", size: 'huge', icon: 'search' });

    const removePayment = (guest: Guest) => {
        const { [guest.email]: number, ...newPayments } = payments;
        setPayments(newPayments);
    };

    const addPayment = (email: string, amount: number) => {
        payments[email] = amount;
        setPayments(payments); // TODO fixme
    };

    const findByTerm = (searchString: string, guests: Guest[]) => {
        return guests.filter((g) => {
            const searchedTerms = [g.firstName.toLowerCase(), g.lastName.toLowerCase(), g.email.toLowerCase()];
            return searchedTerms.filter(t => t.indexOf(searchString) !== -1).length > 0;
        });
    };

    let filteredGuests = [...guests];
    if (searchValue.length > 0) {
        const searchedArray = searchValue.trim().toLowerCase().split(" ");

        for (const searchedTerm of searchedArray) {
            filteredGuests = findByTerm(searchedTerm, filteredGuests);
        }
    }

    const foundSingle: undefined | Guest = filteredGuests.length === 1 ? filteredGuests[0] : undefined;

    return (
        <div className='event-page'>
            <header><h1>{id}</h1></header>
            <GuestList guests={filteredGuests} removeGuest={removePayment} payments={payments}></GuestList>
            <div className='event-list-controls'>
                {searchInput}
                <Button icon circular size='massive' disabled={!foundSingle} onClick={() => foundSingle && addPayment(foundSingle.email, 6)} ><Icon name='checkmark' /></Button>
                <Button icon circular size='massive' disabled={!foundSingle} onClick={() => foundSingle && addPayment(foundSingle.email, 12)} ><Icon name='spy' /></Button>
            </div>
        </div>
    );
}