import React from 'react';


const App = () => {
  const company = {
    id: 1,
    name: 'Nintendo',
    handhelds: [
      {
        name: 'Game Boy',
        games: 1046,
        id: 1
      },
      {
        name: 'Game Boy Advance',
        games: 1538,
        id: 2
      },
      {
        name: 'DS',
        games: 1791,
        id: 3
      }
    ]
  }

  return <Company company={company} />
}

export default App;


const Company = (props) => {
  const { company } = props;
  console.log(company);
  return (
    <>
      <h2>{company.name}</h2>
      <li>{company.handhelds[0].name} - {company.handhelds[0].games}</li>
      <li>{company.handhelds[1].name} - {company.handhelds[1].games}</li>
      <li>{company.handhelds[2].name} - {company.handhelds[2].games}</li>
    </>
  )
} 