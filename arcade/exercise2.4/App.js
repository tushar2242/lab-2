import React from 'react';

const App = () => {
  const companies = [
    {
      name: 'Nintendo',
      id: 1,
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
        },
        {
          name: '3DS',
          games: 1402,
          id: 4
        }
      ]
    },
    {
      name: 'Sony',
      id: 2,
      handhelds: [
        {
          name: 'PSP',
          games: 1925,
          id: 1
        },
        {
          name: 'PS Vita',
          games: 1500,
          id: 2
        }
      ]
    }
  ]



  return <Company company={companies} />
}
export default App;


const Company = (props) => {
  const { company } = props;
  const handheld1 = company[0].handhelds;
  const handheld2 = company[1].handhelds;

  const total1 = handheld1.reduce((accumulator, currentHandheld) => {
    return accumulator + currentHandheld.games;
  }, 0);

  const total2 = handheld2.reduce((accumulator, currentHandheld) => {
    return accumulator + currentHandheld.games;
  }, 0);


  return (
    <>
      <h2>{company[0].name}</h2>
      <li>{company[0].handhelds[0].name} : - {company[0].handhelds[0].games}</li>
      <li>{company[0].handhelds[1].name} : - {company[0].handhelds[1].games}</li>
      <li>{company[0].handhelds[2].name} : - {company[0].handhelds[2].games}</li>
      <b>Total of {total1} games Here</b>

      {/* second information form the company object */}

      <h2>{company[1].name}</h2>
      <li>{company[1].handhelds[0].name} - {company[1].handhelds[0].games}</li>
      <li>{company[1].handhelds[1].name} - {company[1].handhelds[1].games}</li>


      <b>Total of {total2} games</b>

    </>
  )
}





