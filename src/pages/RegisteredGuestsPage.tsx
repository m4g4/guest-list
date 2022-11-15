
import GuestList from '../components/GuestList';
import { Guest } from '../interfaces';
import './RegisteredGuestsPage.scss';

export interface RegisteredGuestsPageProps {
    guests: Guest[],
    setGuests: (guests: Guest[] | ((current: Guest[]) => void)) => void
}

export default function RegisteredGuestsPage({guests, setGuests}: RegisteredGuestsPageProps) {

    const removeGuest = (guest: Guest) => {
        setGuests((current) =>
            current.filter((g) => g.email !== guest.email)
        );
    };

    return (
        <>
            <div className='registered-guests-page'>
                <GuestList guests={guests} removeGuest={removeGuest}></GuestList>
            </div>
        </>
    );
}