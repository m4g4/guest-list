import { User } from "../interfaces";

type UserListProps = {
    users: User[]
}

export default function UserList({ users }: UserListProps) {
  const listItems = users.map((user) =>
    <tr key={user.email}><td>{user.firstName}</td><td>{user.lastName}</td><td>{user.email}</td></tr>
  );
  return (
    <table>
        <thead>
            <th>Meno</th><th>Priezvisko</th><th>Email</th>
        </thead>
        <tbody>{listItems}</tbody>
    </table>
  );
}
