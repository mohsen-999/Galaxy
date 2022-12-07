import "./Button.css";
import { Link } from "react-router-dom";
import { ReactElement } from "react";
type propbutton = {
  buttonStyle?: string;
  buttonSize?: string;

  children: [string, ReactElement];
  className?: string;
};

function Button(prop: propbutton) {
  const {
    buttonStyle = "btn--primary",
    buttonSize = "btn--medium",

    children,
  } = prop;
  const STYLES = ["btn--primary", "btn--outline"];
  const SIZE = ["btn--medium", "btn--large"];

  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];
  return (
    <Link to="/sign-up" className="btn-mobile">
      <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}>
        {children}
      </button>
    </Link>
  );
}

export default Button;
