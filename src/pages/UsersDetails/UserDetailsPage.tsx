import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StarFilled from "../../assets/icons/star-filled.png";
import StarOutline from "../../assets/icons/star-outline.png";
import UserInfoContent from "../../components/UserInfoContent";

const UserDetails: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("General Details");

  const tabs = [
    "General Details",
    "Documents",
    "Bank Details",
    "Loans",
    "Savings",
    "App and System",
  ];

  return (
    <div className="user-details-page">
      <div className="back-nav" onClick={() => navigate(-1)}>
        <svg
          width="27"
          height="10"
          viewBox="0 0 27 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.07497 5.04787C0.119502 5.16272 0.186297 5.26819 0.271845 5.35723L4.02184 9.10723C4.19763 9.28418 4.43785 9.38497 4.68748 9.38497C4.93711 9.38497 5.17732 9.28418 5.35312 9.10723C5.53008 8.93145 5.63086 8.69122 5.63086 8.44159C5.63086 8.19196 5.53008 7.95175 5.35312 7.77595L3.19687 5.62909H25.7812C26.2992 5.62909 26.7187 5.20957 26.7187 4.69159C26.7187 4.17361 26.2992 3.75409 25.7812 3.75409H3.19687L5.35312 1.60723C5.7211 1.23925 5.7211 0.643965 5.35312 0.275985C4.98514 -0.091995 4.38985 -0.091995 4.02187 0.275985L0.271875 4.02598C0.186327 4.11505 0.119532 4.22052 0.075 4.33534C0.026952 4.44784 0.001173 4.56855 0 4.69159C0.0011718 4.81464 0.0269532 4.93534 0.075 5.04784L0.07497 5.04787Z"
            fill="#545F7D"
          />
        </svg>

        <span>Back to Users</span>
      </div>

      <div className="page-header">
        <h2 className="page-title">User Details</h2>
        <div className="action-buttons">
          <button className="btn-blacklist">BLACKLIST USER</button>
          <button className="btn-activate">ACTIVATE USER</button>
        </div>
      </div>

      {/* Profile Summary Header Card */}
      <div className="profile-summary-card">
        <div className="profile-summary-card__top">
          <div className="user-info">
            <div className="avatar-container">
              <svg
                width="31"
                height="33"
                viewBox="0 0 31 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 30.7997C1.93908 27.8403 3.25312 25.2465 5.43908 23.0201C8.2 20.2201 11.5327 18.8201 15.4391 18.8201C19.3455 18.8201 22.6799 20.2201 25.4391 23.0201C27.6391 25.2466 28.9656 27.8405 29.4188 30.7997M23.6 9.64048C23.6 11.867 22.8062 13.7733 21.2188 15.3609C19.6328 16.9609 17.7125 17.7609 15.4596 17.7609C13.2189 17.7609 11.3004 16.9609 9.70036 15.3609C8.11284 13.7734 7.31912 11.8671 7.31912 9.64048C7.31912 7.38736 8.11288 5.46688 9.70036 3.87968C11.3004 2.29376 13.2191 1.5 15.4596 1.5C17.7127 1.5 19.6332 2.29376 21.2188 3.87968C22.8063 5.4672 23.6 7.38748 23.6 9.64048Z"
                  stroke="#213F7D"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="name-id">
              <h3>Grace Effiom</h3>
              <p>LSQFf587g90</p>
            </div>
          </div>

          <div className="divider" />

          <div className="user-tier">
            <p>User's Tier</p>
            <div className="stars">
              <img src={StarFilled} alt="star" />
              <img src={StarOutline} alt="star" />
              <img src={StarOutline} alt="star" />
            </div>
          </div>

          <div className="divider" />

          <div className="bank-info">
            <h3>₦200,000.00</h3>
            <p>9912345678/Providus Bank</p>
          </div>
        </div>

        <div className="profile-summary-card__tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Detailed Info Card */}
      <div className="details-content-card">
        {activeTab === "General Details" ? (
          <UserInfoContent />
        ) : (
          <div className="empty-state">No data available for {activeTab}</div>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
