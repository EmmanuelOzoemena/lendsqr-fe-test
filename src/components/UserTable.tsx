import type { User } from '../types/user';
import FilterIcon from '../assets/icons/filter-icon.png';
import MoreIcon from '../assets/icons/more-vertical.png'; 

interface UserTableProps {
  users: User[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  const headers = ['ORGANIZATION', 'USERNAME', 'EMAIL', 'PHONE NUMBER', 'DATE JOINED', 'STATUS'];

  return (
    <div className="table-container">
      <table className="table-container__user-table">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>
                <div className="header-content">
                  {header}
                  <img src={FilterIcon} alt="filter" className="filter-icon" />
                </div>
              </th>
            ))}
            <th></th> 
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.organization}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.dateJoined}</td>
              <td>
                <span className={`status-badge status-badge-${user.status.toLowerCase()}`}>
                  {user.status}
                </span>
              </td>
              <td>
                <img src={MoreIcon} alt="more" className="more-icon" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;