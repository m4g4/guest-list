import { Form, Button, Icon } from 'semantic-ui-react';
import DatePicker from "react-datepicker";

import { useInput } from '../hooks/useInput';

import { ChoirEvent } from '../interfaces';

import './AddEvent.scss';
import { useState } from 'react';

type AddEventProps = {
  onAdd: (event: ChoirEvent) => void
}

export default function AddGuest({ onAdd }: AddEventProps) {
  
    const [memberShipFee, membershipFeeInput] = useInput({ placeholder: "Členské...", size: 'huge', icon: 'mail' });
    const [date, setDate] = useState(new Date());

    const handleAdd = () => {
        onAdd({
            dateString: date.getDate() + "." + date.getMonth() + "." + date.getFullYear(),
            membershipFee: Number.parseInt(memberShipFee)
        });
    };

  return (
    <div className='add-event-panel'>
        <div className='add-event-form'>
                <Form>
                  <Form.Field>
                      <DatePicker selected={date} onChange={(date:Date) => setDate(date)} />
                    </Form.Field>
                  <Form.Field>
                      {membershipFeeInput}
                  </Form.Field>
                  <div>
                      <Button icon circular size='massive' onClick={handleAdd} disabled={!memberShipFee || !Number.isInteger(memberShipFee) || !date}>
                          <Icon name='add' />
                      </Button>
                  </div>
              </Form>
        </div>
    </div>
  );
}
