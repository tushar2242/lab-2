import React from 'react';

const Company = (props) =>{
    const {company}= props;
    console.log(company);
    return(
        <>
        <h2>{company.name}</h2>
        <p>{company.handhelds[0].name} - {company.handhelds[0].games}</p>
        <p>{company.handhelds[1].name} - {company.handhelds[1].games}</p>
        <p>{company.handhelds[2].name} - {company.handhelds[2].games}</p>
        </>
    )
}

export default Company;
