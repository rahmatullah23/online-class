import React from 'react';
import courses from '../../fakeData/course-data'
import Course from '../Course/Course';
import Cart from '../Cart/Cart';
import { useState } from 'react';



const Main = () => {
    const first3 = courses.slice(0,12);
    const [course, setCourse] = useState(first3);
    const [cart, setCart] = useState([]);
    console.log(cart)
    const handleAddCourse = (course) => { 
        console.log('added',course);
        const newCart = [...cart, course];
         setCart(newCart); 
    }
    
    return (
               
        <div>
            <Cart cart={cart}> </Cart>
            {
   course.map(crs=><Course course={crs} handleAddCourse= {handleAddCourse}></Course>)    
        }
                 
        </div>
    
        
    );
};

export default Main;