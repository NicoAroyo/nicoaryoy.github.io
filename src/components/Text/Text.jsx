import React from "react";
import "./Text.scss";

export const BigText = (props) => {
  return <div className="big-text"{...props}>{props.children}
  </div>;
};

export const MediumText = (props) => {
  return <div className="medium-text"{...props}>{props.children}
  </div>;
};

export const SmallText = (props) => {
  return <div className="small-text"{...props}>{props.children}
  </div>;
};