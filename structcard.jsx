import { memo } from 'react';
import Save from './save'; // make sure this import is correct

const StructCard = ({ brandLogo, role, experience, type, location, annualPay }) => {
  return (
    <div className="Card">
      <div className="header">
        <img className="logo" src={brandLogo} alt="logo" />
        <Save />
      </div>

      <div className="jobdes">
        <h2>{role}</h2>
        <h4>{experience}</h4>
        <h4>{type}</h4>
      </div>

      <div className="apply">
        <div className="pay">
          <strong>{annualPay}</strong>
          <p>{location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default memo(StructCard);
