import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

import "../../App.css";

export const Breadcrumb = ({ paths }) => {
  return (
    <div className="breadcrumb">
      <NavLink to="/">Home</NavLink>
      {paths.map((item, index) => (
        <Fragment key={index}>
          <span>&gt;</span>
          {item.link ? (
            <NavLink to={item.link}>{item.name}</NavLink>
          ) : (
            <p>{item.name}</p>
          )}
        </Fragment>
      ))}
    </div>
  );
};
