import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';

const App = () => {
  const [groups, setGroups] = useState([]);
  const [newName, setNewName] = useState('');
  const [url, setUrl] = useState('');
  const [filterName, setFilterName] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/groups')
      .then(response => setGroups(response.data))
      .catch(error => console.log(error));
  }, []);

  function addNewElement() {
    const newGroup = {
      name: newName,
      url: url
    }
    axios.post('http://localhost:3001/groups', newGroup)
      .then(response => setGroups([...groups, response.data]))
      .catch(error => console.log(error));

    setNewName('');
    setUrl('');
  }

  const handleGroupName = (e) => {
    e.preventDefault();

    const updateUrl = (name) => {
      const index = groups.findIndex(group => group.name === name);
      if (index >= 0) {
        if (window.confirm(`${name} has already been added to the community directory. Replace the old URL with the new one?`)) {
          const updatedGroups = [...groups];
          updatedGroups[index].url = url;
          axios.put(`http://localhost:3001/groups/${groups[index].id}`, updatedGroups[index])
            .then(response => setGroups(updatedGroups))
            .catch(error => console.log(error));
          setNewName('');
          setUrl('');
        }
      }
      return true;
    };

    groups.some(group => {
      if (group.name === newName) {
        return updateUrl(group.name);
      }
      return false;
    }) || addNewElement();
  };

  const handleChange = (e) => {
    setNewName(e.target.value)
  }

  const handleUrl = (e) => {
    setUrl(e.target.value)
  }

  const filterInput = (e) => {
    setFilterName(e.target.value)
  }

  const handleDeleteGroup = (id, name) => {
    if (window.confirm(`Delete ${name}`)) {
      axios.delete(`http://localhost:3001/groups/${id}`)
        .then(() => setGroups(groups.filter(group => group.id !== id)))
        .catch(error => console.log(error));
    }
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
        handleDeleteGroup={handleDeleteGroup}
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
  const { groups, filterName, handleDeleteGroup } = props;



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