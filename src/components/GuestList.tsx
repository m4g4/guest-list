import { Table, Button, Icon } from 'semantic-ui-react';

import './GuestList.scss';
import { Guest } from "../interfaces";

type GuestListProps = {
  guests: Guest[],
  removeGuest: (guest: Guest) => void
}

export default function GuestList({ guests, removeGuest }: GuestListProps) {
  const listItems = guests.map((guest, i) => {

    const removeButton = <Button icon circular size='large' onClick={() => removeGuest(guest)} ><Icon name='remove' /></Button>;

    return (
      <Table.Row key={guest.email}>
        <Table.Cell>{guest.firstName}</Table.Cell>
        <Table.Cell>{guest.lastName}</Table.Cell>
        <Table.Cell>{guest.email}</Table.Cell>
        <Table.Cell collapsing>{removeButton}</Table.Cell>
      </Table.Row>
    );
  });
  return (
    <Table celled striped>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Meno</Table.HeaderCell>
          <Table.HeaderCell>Priezvisko</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
      </Table.Row>
      </Table.Header>
      <Table.Body>
        {listItems}
      </Table.Body>
    </Table>
  );
}
