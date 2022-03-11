import React from "react";

import Button from "./Button";
// import {useLocation} from "react-router-dom"

const header = ({ title, onAdd, showAdd }) => {
 
  //const location = useLocation();

  return (
    
    <header style={headingStyle} className="header">
      <h1>{title}</h1>
     
        
       <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "close" : "Add"}
          onClick={onAdd}
        />
      
     
    </header>
  );
};

header.defaultProps = {
  title: "welcome",
};

// header.Prototypes = {
//     title : PropTypes.string.isRequired,
// }
const headingStyle = {
  color: "red",
  backgroundColor: "black",
};

export default header;
