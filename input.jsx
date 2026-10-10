import { memo } from 'react';

const Card = () => {
  return (
   <div className="Card">
      <div className="Cards">
      <div className="header">
        <img
          className="logo"
          src="https://www.connectmoney.com/wp-content/uploads/sites/4/2023/09/DE-Shaw.jpg"
          alt="logo"
        />
        <Save />
      </div>

      <div className="jobdes">
       
        <h2>Member of Technical Staff-2</h2>
        <h4>3-5 Years Experience</h4>
        <h4>Full Time</h4>
      </div>

      <div className="apply">
        <div className="pay">
          <strong>$120k/yr</strong>
          <p>Mumbai, India</p>
        </div>
        <button>Apply Now</button>
      </div>
      </div>
        <div className="Cards">
      <div className="header">
        <img
          className="logo"
          src="https://www.connectmoney.com/wp-content/uploads/sites/4/2023/09/DE-Shaw.jpg"
          alt="logo"
        />
        <Save />
      </div>

      <div className="jobdes">
       
        <h2>Member of Technical Staff-2</h2>
        <h4>3-5 Years Experience</h4>
        <h4>Full Time</h4>
      </div>

      <div className="apply">
        <div className="pay">
          <strong>$120k/yr</strong>
          <p>Mumbai, India</p>
        </div>
        <button>Apply Now</button>
      </div>
      </div>
    </div>
  );
};

export default memo(Card);