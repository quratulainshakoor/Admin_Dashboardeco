import { Link } from "react-router-dom";

const NotFoundPage = ({ showButton=true, showIcon=true }) => {
  return (
    <div className="not-found-page">
      {showIcon && (
        <div className="company-logo mt-150 mb-20">
          {/* <img src={CompanyLogo} alt="social" /> */}
        </div>
      )}
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      {showButton && <Link to="/">Go back to the homepage</Link>}
    </div>
  );
};

export default NotFoundPage;
