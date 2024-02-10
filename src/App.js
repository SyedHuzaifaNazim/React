import React, { useState } from 'react';
import './App.css';

const ListItem = (props) => (
  <li onClick={() => props.handleClick(props.name)}>{props.name}</li>
);

const ListDisplay = (props) => {
  const items = props.items.map((item, i) => (
    <ListItem key={i} name={item} handleClick={props.handleClick} />
  ));
  return <ul>{items}</ul>;
};

const InputText = (props) => {
  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
    </form>
  );
};

function App() {
  const [items, setItems] = useState(['oranges', 'apples', 'candy']);

  const handleClick = (item) => {
    setItems(items.filter((i) => i !== item));
  };

  const handleSubmit = (item) => {
    setItems(items.concat(item));
  };

  return (
    <div id="list-container">
      <h1>Shopping List</h1>
      <ListDisplay items={items} handleClick={handleClick} />
      <InputText handleSubmit={handleSubmit} />
      {/* <form> */}
        {/* <InputText handleSubmit={handleClick}/> */}
      {/* </form> */}
    </div>
  );
}

export default App;
