interface SummaryCardProps {
  icon: string; // URL or path to the icon
  title: string; // e.g., "USERS"
  count: string; // e.g., "2,453"
  iconBgColor: string; // Background color for the icon circle
}

const SummaryCard: React.FC<SummaryCardProps> = ({
  icon,
  title,
  count,
  iconBgColor,
}) => {
  return (
    <div className="summary-card">
      <div
        className="summary-card__icon-container"
        style={{ backgroundColor: iconBgColor }}
      >
        <img src={icon} alt={title} />
      </div>
      <h3 className="summary-card__title">{title}</h3>
      <p className="summary-card__count">{count}</p>
    </div>
  );
};

export default SummaryCard;
