import React from "react";
import WelcomScreen from "../welcom-screen/welcom-screen";
import PropTypes from "prop-types";

const App = (props) => {
  const {errorsCount} = props;

  return (
    <WelcomScreen errorsCount={errorsCount} />
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};

export default App;
