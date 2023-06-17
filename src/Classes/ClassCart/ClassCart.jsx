import React from 'react';
import Classes from '../Classes';
import { useState } from 'react';
import { useEffect } from 'react';
import SectionTitle from '../../Component/SectionTitle/SectionTitle';

const ClassCart = () => {
    const [approvedClasses, setApprovedClasses] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/allClass`)
          .then((response) => response.json())
          .then((data) => setApprovedClasses(data))
          .catch((error) => console.error(error));
      }, []);
    
    return (
        <div className='mx-auto container lg:mt-24'>
            <SectionTitle subHeading="-------" heading="All Class" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-4 md:mx-0">
         
            {approvedClasses.map(classCart=> <Classes key={classCart._id}  classCart={classCart}> </Classes>)}
        </div>
        </div>
    );
};

export default ClassCart;