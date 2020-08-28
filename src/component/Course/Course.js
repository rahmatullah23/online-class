import React from 'react';
import './Course.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Course = (props) => {
    console.log(props.course)
    return (
        <div className="course">
            <h3>{props.course.name}</h3>
            <h5>Fee $ {props.course.price}</h5>
            <button className="btn  btn-primary"
              onClick={() =>props.handleAddCourse(props.course)}>
               <FontAwesomeIcon icon={faShoppingCart} /> Enroll Now            
            </button>                     
        </div>
    );
};

export default Course;