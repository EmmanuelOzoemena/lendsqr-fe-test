const UserInfoContent: React.FC = () => {
  return (
    <div className="user-info-content">
      {/* Personal Information Section */}
      <section className="info-section">
        <h4 className="info-section__title">Personal Information</h4>
        <div className="info-grid">
          <div className="info-item">
            <h5>FULL NAME</h5>
            <p>Grace Effiom</p>
          </div>
          <div className="info-item">
            <h5>PHONE NUMBER</h5>
            <p>07060780922</p>
          </div>
          <div className="info-item">
            <h5>EMAIL ADDRESS</h5>
            <p>grace@gmail.com</p>
          </div>
          <div className="info-item">
            <h5>BVN</h5>
            <p>07060780922</p>
          </div>
          <div className="info-item">
            <h5>GENDER</h5>
            <p>Female</p>
          </div>
          <div className="info-item">
            <h5>MARITAL STATUS</h5>
            <p>Single</p>
          </div>
          <div className="info-item">
            <h5>CHILDREN</h5>
            <p>None</p>
          </div>
          <div className="info-item">
            <h5>TYPE OF RESIDENCE</h5>
            <p>Parent’s Apartment</p>
          </div>
        </div>
      </section>

      <hr />

      {/* Education and Employment Section */}
      <section className="info-section">
        <h4 className="info-section__title">Education and Employment</h4>
        <div className="info-grid info-grid-4-cols">
          <div className="info-item">
            <h5>LEVEL OF EDUCATION</h5>
            <p>B.Sc</p>
          </div>
          <div className="info-item">
            <h5>EMPLOYMENT STATUS</h5>
            <p>Employed</p>
          </div>
          <div className="info-item">
            <h5>SECTOR OF EMPLOYMENT</h5>
            <p>FinTech</p>
          </div>
          <div className="info-item">
            <h5>DURATION OF EMPLOYMENT</h5>
            <p>2 years</p>
          </div>
          <div className="info-item">
            <h5>OFFICE EMAIL</h5>
            <p>grace@lendsqr.com</p>
          </div>
          <div className="info-item">
            <h5>MONTHLY INCOME</h5>
            <p>₦200,000.00 - ₦400,000.00</p>
          </div>
          <div className="info-item">
            <h5>LOAN REPAYMENT</h5>
            <p>40,000</p>
          </div>
        </div>
      </section>

      <hr />

      {/* Socials Section */}
      <section className="info-section">
        <h4 className="info-section__title">Socials</h4>
        <div className="info-grid">
          <div className="info-item">
            <h5>TWITTER</h5>
            <p>@grace_effiom</p>
          </div>
          <div className="info-item">
            <h5>FACEBOOK</h5>
            <p>Grace Effiom</p>
          </div>
          <div className="info-item">
            <h5>INSTAGRAM</h5>
            <p>@grace_effiom</p>
          </div>
        </div>
      </section>

      <hr />

      {/* Guarantor Section */}
      <section className="info-section">
        <h4 className="info-section__title">Guarantor</h4>
        <div className="info-grid">
          <div className="info-item">
            <h5>FULL NAME</h5>
            <p>Debby Ogana</p>
          </div>
          <div className="info-item">
            <h5>PHONE NUMBER</h5>
            <p>07060780922</p>
          </div>
          <div className="info-item">
            <h5>EMAIL ADDRESS</h5>
            <p>debby@gmail.com</p>
          </div>
          <div className="info-item">
            <h5>RELATIONSHIP</h5>
            <p>Sister</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserInfoContent;
