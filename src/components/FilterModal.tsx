
const FilterModal: React.FC = () => {
  return (
    <div className="filter-modal">
      <form className="filter-modal__form">
        <div className="form-group">
          <label>Organization</label>
          <select>
            <option value="">Select</option>
            <option value="lendsqr">Lendsqr</option>
            <option value="irorun">Irorun</option>
          </select>
        </div>

        <div className="form-group">
          <label>Username</label>
          <input type="text" placeholder="User" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Email" />
        </div>

        <div className="form-group">
          <label>Date</label>
          <input type="date" placeholder="Date" />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input type="text" placeholder="Phone Number" />
        </div>

        <div className="form-group">
          <label>Status</label>
          <select>
            <option value="">Select</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="pending">Pending</option>
            <option value="blacklisted">Blacklisted</option>
          </select>
        </div>

        <div className="filter-modal__actions">
          <button type="reset" className="btn-reset">Reset</button>
          <button type="submit" className="btn-filter">Filter</button>
        </div>
      </form>
    </div>
  );
};

export default FilterModal;