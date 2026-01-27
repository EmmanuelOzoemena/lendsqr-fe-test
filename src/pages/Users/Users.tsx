import SummaryCard from "../../components/SummaryCard";

// Import your icons here
import UsersIcon from "../../assets/icons/users-multi.png";
import ActiveUsersIcon from "../../assets/icons/users-active.png";
import LoansIcon from "../../assets/icons/users-loans.png";
import SavingsIcon from "../../assets/icons/users-savings.png";

const Users: React.FC = () => {
  const summaryData = [
    {
      title: "USERS",
      count: "2,453",
      icon: UsersIcon,
      bgColor: "rgba(223, 24, 255, 0.1)",
    },
    {
      title: "ACTIVE USERS",
      count: "2,453",
      icon: ActiveUsersIcon,
      bgColor: "rgba(87, 24, 255, 0.1)",
    },
    {
      title: "USERS WITH LOANS",
      count: "12,453",
      icon: LoansIcon,
      bgColor: "rgba(245, 95, 68, 0.1)",
    },
    {
      title: "USERS WITH SAVINGS",
      count: "102,453",
      icon: SavingsIcon,
      bgColor: "rgba(255, 51, 102, 0.1)",
    },
  ];

  return (
    <div className="users-page">
      <h1 className="users-page__title">Users</h1>

      <div className="users-page__summary-grid">
        {summaryData.map((data, index) => (
          <SummaryCard
            key={index}
            title={data.title}
            count={data.count}
            icon={data.icon}
            iconBgColor={data.bgColor}
          />
        ))}
      </div>

      {/* The Table Section will go here next */}
    </div>
  );
};

export default Users;
