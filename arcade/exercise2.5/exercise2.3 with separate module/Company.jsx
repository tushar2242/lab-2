import React from 'react';

const Company = (props) => {
    const { company } = props;
    const games = [company.handhelds[0].games, company.handhelds[1].games, company.handhelds[2].games];

    const total = games.reduce((s, p) => s + p, 0);

    return (
        <>
            <h2>{company.name}</h2>
            <p>{company.handhelds[0].name} - {company.handhelds[0].games}</p>
            <p>{company.handhelds[1].name} - {company.handhelds[1].games}</p>
            <p>{company.handhelds[2].name} - {company.handhelds[2].games}</p>
            <b>Total of {total} games</b>

        </>
    )
}

export default Company;
