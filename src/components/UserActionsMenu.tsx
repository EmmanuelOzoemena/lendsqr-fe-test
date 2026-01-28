
import EyeIcon from '../assets/icons/eye.png';
import BlacklistIcon from '../assets/icons/blacklist-user.png';
import ActivateIcon from '../assets/icons/activate-user.png';

interface UserActionsMenuProps {
  onViewDetails: () => void;
  onBlacklist: () => void;
  onActivate: () => void;
}

const UserActionsMenu: React.FC<UserActionsMenuProps> = ({
  onViewDetails,
  onBlacklist,
  onActivate
}) => {
  return (
    <div className="user-actions-menu">
      <div className="user-actions-menu__item" onClick={onViewDetails}>
        <img src={EyeIcon} alt="view" />
        <span>View Details</span>
      </div>
      <div className="user-actions-menu__item" onClick={onBlacklist}>
        <img src={BlacklistIcon} alt="blacklist" />
        <span>Blacklist User</span>
      </div>
      <div className="user-actions-menu__item" onClick={onActivate}>
        <img src={ActivateIcon} alt="activate" />
        <span>Activate User</span>
      </div>
    </div>
  );
};

export default UserActionsMenu;