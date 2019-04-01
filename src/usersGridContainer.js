import React from "react";
import PropTypes from "prop-types";

const UsersGridContainer = (props) => {
    
        const {firstName, lastName, avatar} = props;
       
        return (
            <div className = "user">
                <div className="radius-conatiner">
                    <img src={avatar} alt ={firstName} className="user-thumbnail" />
                </div>
                
                <h3 className="userName">{firstName} {lastName} </h3>
                <span className="delete" onClick = {props.delete}>Delete</span>
             </div>
        )
    }


export default UsersGridContainer;

// define validation for Props
UsersGridContainer.propTypes = {
    firstName:PropTypes.string,
    lastName:PropTypes.string,
    avatar:PropTypes.string,
    delete:PropTypes.func
}