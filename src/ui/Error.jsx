import classes from "./css/Error.module.css";
import UnitedIcon from "./UnitedIconBig";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className={classes.page}>
      <h1 className={classes.heading}>Error!</h1>
      <UnitedIcon className={classes.icon} />
      <Link to="/" className={classes.link}>
        Go Back to Home Page
      </Link>
    </div>
  );
};
export default Error;
