import React from 'react'
import "./Input.scss"

export const Input = (props) => {
    return (
      <div className="coolinput">
        <label htmlFor="input" className="text">
          {props.children}:
        </label>
        <input type="text" name="input" className="input" placeholder={props.children} onChange={props.onChange}/>
      </div>
    );
  };

  export const BiggerInput = (props) => {
    return (
      <div className="coolinput">
        <label htmlFor="input" className="text">
          {props.children}:
        </label>
        <div className="big">
          <input type="text" name="input" className="input" placeholder={props.children} onChange={props.onChange}/>
        </div>
      </div>
    );
  };
  
