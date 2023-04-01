import React from 'react';
import Company from './arcade/exercise/Company';


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

export default App