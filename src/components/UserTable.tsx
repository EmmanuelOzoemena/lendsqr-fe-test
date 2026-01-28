import { useState } from "react";
import type { User } from "../types/user";
import { useNavigate } from "react-router-dom";
import FilterIcon from "../assets/icons/filter-icon.png";
import MoreIcon from "../assets/icons/more-vertical.png";
import UserActionsMenu from "./UserActionsMenu";
import FilterModal from "./FilterModal";

interface UserTableProps {
  users: User[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  const headers = [
    "ORGANIZATION",
    "USERNAME",
    "EMAIL",
    "PHONE NUMBER",
    "DATE JOINED",
    "STATUS",
  ];

  // Inside UserTable component
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Inside your component
  const navigate = useNavigate();

  const handleViewDetails = (userId: string) => {
    navigate(`/users/${userId}`);
  };

  const toggleMenu = (userId: string) => {
    setActiveMenuId(activeMenuId === userId ? null : userId);
  };

  return (
    <div className="table-container">
      <table className="table-container__user-table">
        <thead>
          <tr>
            {/* {headers.map((header) => (
              <th key={header}>
                <div className="header-content">
                  {header}
                  <img
                    src={FilterIcon}
                    alt="filter"
                    className="filter-icon"
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                  />
                  {isFilterOpen && <FilterModal />}
                </div>
              </th>
            ))} */}

            {headers.map((header) => (
              <th key={header} style={{ position: "relative" }}>
                <div
                  className="header-content"
                  onClick={() =>
                    header === "ORGANIZATION" && setIsFilterOpen(!isFilterOpen)
                  }
                >
                  <span>{header}</span>
                  <img src={FilterIcon} alt="filter" className="filter-icon" />
                </div>

                {/* Only show the modal here if this specific header is Organization */}
                {header === "ORGANIZATION" && isFilterOpen && <FilterModal />}
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
                <span
                  className={`status-badge status-badge-${user.status.toLowerCase()}`}
                >
                  {user.status}
                </span>
              </td>
              <td onClick={() => toggleMenu(user.id)}>
                <div className="actions-cell">
                  <img
                    src={MoreIcon}
                    alt="more"
                    className="more-icon"
                    
                  />

                  {activeMenuId === user.id && (
                    <UserActionsMenu
                      onViewDetails={() => handleViewDetails(user.id)}
                      // onViewDetails={() => console.log("View", user.id)}
                      onBlacklist={() => console.log("Blacklist", user.id)}
                      onActivate={() => console.log("Activate", user.id)}
                    />
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
