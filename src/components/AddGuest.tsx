import { Form, Button, Icon } from 'semantic-ui-react';
import { useInput } from '../hooks/useInput';

import { Guest } from '../interfaces';

import './AddGuest.scss';

type AddGuestProps = {
  onAdd: (guest: Guest) => void
}

export default function AddGuest({ onAdd }: AddGuestProps) {
  
    const [name, nameInput] = useInput({placeholder: "Meno...", size: 'huge', icon: 'user'});
    const [email, emailInput] = useInput({placeholder: "Email...", size: 'huge', icon: 'mail'});

    const nameParsed: string[] = name.trim().split(" ");

    const handleAdd = () => {
        const lastName = nameParsed.slice(1).join(" ");
        onAdd({
            firstName: nameParsed[0],
            lastName,
            email
        });
    };

    const isEmailValid = (email: string) => {
        return /\S+@\S+\.\S+/.test(email);
    }

  return (
    <div className='add-guest-panel'>
        <div className='add-guest-form'>
                <Form>
                  <Form.Field>
                      {nameInput}
                    </Form.Field>
                  <Form.Field>
                      {emailInput}
                  </Form.Field>
                  <div>
                      <Button icon circular size='massive' onClick={handleAdd} disabled={nameParsed.length < 2 || !isEmailValid(email)}>
                          <Icon name='add' />
                      </Button>
                  </div>
              </Form>
        </div>
    </div>
  );
}
