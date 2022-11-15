import { Table, Button, Icon } from 'semantic-ui-react';

import './EventList.scss';
import { ChoirEvent } from "../interfaces";

type EventListProps = {
  events: ChoirEvent[],
  onEventClick: (event: ChoirEvent) => void
}

export default function EventList({ events, onEventClick }: EventListProps) {
  const listItems = events.map((event) => {

    const navigateButton = <Button icon circular size='large' onClick={() => onEventClick(event)} ><Icon name='sign in' /></Button>;

    return (
      <Table.Row key={event.dateString}>
        <Table.Cell>{navigateButton}</Table.Cell>
        <Table.Cell>{event.dateString}</Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
    );
  });
  return (
    <Table celled striped>
    <Table.Header>
        <Table.Row>
          <Table.HeaderCell></Table.HeaderCell>
        <Table.HeaderCell>Skúška zboru</Table.HeaderCell>
          <Table.HeaderCell>Počet účastníkov</Table.HeaderCell>
      </Table.Row>
      </Table.Header>
      <Table.Body>
        {listItems}
      </Table.Body>
    </Table>
  );
}
