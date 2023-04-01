import { useState } from 'react';
import React from 'react';

const App = () => {
  const [groups, setGroups] = useState([
    { name: 'COMP 227 Students', url: 'https://discord.gg/VRUKRxCJ95', id: 1 },
    { name: 'PySlackers', url: 'https://pythondev.slack.com', id: 2 },
    { name: 'Code Support', url: 'https://discord.gg/XQ9C3sY', id: 3 },
    { name: 'Front End Developers', url: 'https://discord.gg/XHsumw2C39', id: 4 }
  ])
  const [newName, setNewName] = useState('');
  const [url, setUrl] = useState('');
  const [filterName, setFilterName] = useState('');


  function addNewElement() {
    const newGroup = {
      name: newName,
      url: url
    }
    setGroups(groups.concat(newGroup));
    setNewName('');
    setUrl('')
    // reset the newName state after adding it to the members array
  }

  const handleGroupName = (e) => {

    e.preventDefault();

    const updateUrl = (name) => {
      const index = groups.findIndex(group => group.name === name);
      if (index >= 0) {
        if (window.confirm(`${name} has already been added to the community directory. Replace the old URL with the new one?`)) {
          const updatedGroups = [...groups];
          updatedGroups[index].url = url;
          setGroups(updatedGroups);
          setNewName('');
          setUrl('')
        }
      }

    }




    groups.map((group) => {
      (group.name === newName)
        ? updateUrl(group.name)
        : addNewElement();
    }
    )



  }



  const handleChange = (e) => {
    setNewName(e.target.value)
  }
  const handleUrl = (e) => {
    setUrl(e.target.value)
  }
  const filterInput = (e) => {
    setFilterName(e.target.value)
  }

  return (
    <div>
      <h2>Community Directory</h2>
      <Filter
        text=' filter shown with : '
        filterInput={filterInput}
        filterName={filterName}
      />

      <h2>Add a new</h2>
      <GroupForm
        handleGroupName={handleGroupName}
        handleChange={handleChange}
        newName={newName}
        handleUrl={handleUrl}
        url={url}
      />

      <h2>URLs</h2>
      <Groups
        groups={groups}
        filterName={filterName}
        setGroups={setGroups}
      />

    </div>
  )
}

export default App;


const Filter = (props) => {
  const { text, filterInput, filterName } = props;
  return (
    <>
      {text} <input onChange={filterInput} value={filterName} /><br />
    </>
  )
}

const GroupForm = (props) => {
  const { handleGroupName, handleChange, newName, handleUrl, url } = props;
  return (
    <form onSubmit={handleGroupName}>
      <div>
        name: <input onChange={handleChange} value={newName} /><br />

        url: <input onChange={handleUrl} value={url} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const Groups = (props) => {
  const { groups, filterName, setGroups } = props;


  const handleDeleteGroup = (id, name) => {
    if (window.confirm(`Delete ${name}`)) {
      const updatedGroups = groups.filter(group => group.id !== id);
      setGroups(updatedGroups);
    }
  }

  return (
    <ul>
      {groups.filter(group => group.name.toLowerCase().includes(filterName.toLowerCase())).map((group, index) => {
        return (
          <div key={index}>
            <p >{group.name} :- <a href={group.url}>{group.url}</a><button onClick={() => handleDeleteGroup(group.id, group.name)}>Delete</button></p>

          </div>
        )

      })
      }
    </ul>
  )
}