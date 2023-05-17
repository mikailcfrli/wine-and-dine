import './RegisterPage.scss';
import shape from '././Group.png';
export const RegisterPage = () => {
  return (
    <>
      <div className="form">
        <div className="headerregister">
          <img src={shape} alt="" />
          <p>Wine Mill</p>
        </div>
        <div className="label">
          <label htmlFor="firstname">First Name</label>
          <input type="text" id="firstname" className="forwidth" />
        </div>
        <div className="label">
          <label htmlFor="lastname">Last Name</label>
          <input type="text" id="lastname" className="forwidth" />
        </div>
        <div className="label">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className="forwidth" />
        </div>
        <div className="label">
          <p>Are you an existing customer?</p>
          <label htmlFor="yes">yes</label>
          <input type="radio" id="yes" />
          <label htmlFor="no">no</label>
          <input type="radio" id="no" />
        </div>
        <div className="new">
          <button className="register">Register</button>
        </div>
      </div>
    </>
  );
};
