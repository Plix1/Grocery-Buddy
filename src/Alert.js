import React, { useEffect } from "react";

const Alert = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]); /* we added list as a dependency because we want
   to show the alert for 3 seconds as the alert was only show for
   total 3 second danger and success*/
  return <p className={`alert alert-${type}`}>{msg}</p>; // using alert to display at the top
};

export default Alert;
