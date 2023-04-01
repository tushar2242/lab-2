import { useState } from 'react';
import React from 'react';

const App = () => {
  const [groups, setGroups] = useState([
    { name: 'COMP 227 Students' }
  ])
  const [newName, setNewName] = useState('')
  const handleGroupName = (e) => {

    e.preventDefault();

    // checking that the name is already define 
    // const test = groups;
    // test.name=newName;
    let test = true;
    groups.map((group) => {
      (group.name === newName)
        ? test = false
        : test = true;
    }
    )

    if (test) {
      const newGroup = { name: newName }
      setGroups(groups.concat(newGroup));
      setNewName('');
      // reset the newName state after adding it to the members array
    }
    else {
      alert(`${newName} has already been added to the community directory`)
    }


  }

  const handleChange = (e) => {
    setNewName(e.target.value)
  }

  return (
    <div>
      <h2>Community Directory</h2>
      <form onSubmit={handleGroupName}>
        <div>
          name: <input onChange={handleChange} value={newName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>URLs</h2>
      <ul>
        {groups.map((group, index) =>
          <p key={index}>{group.name}</p>
        )}
      </ul>
    </div>
  )
}

export default App