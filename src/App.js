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
  const [items, setItems] = useState([]);

  const handleClick = (item) => {
    setItems(items.filter((i) => i !== item));
  };

  const handleSubmit = (item) => {
    setItems(items.concat(item));
  };

  return (
    <>
    <div id="list-container">
      <h1><b><i>Shopping List</i></b></h1>
      <p><i><b>Item name:</b></i></p>
      <InputText handleSubmit={handleSubmit} />
      <ListDisplay items={items} handleClick={handleClick} />
      {/* <form> */}
        {/* <InputText handleSubmit={handleClick}/> */}
      {/* </form> */}
    </div>
    <p className='github'><i>You can see repo of this on <b><a href='https://github.com/SyedHuzaifaNazim'>Github</a></b></i></p>
    </>
  );
}

export default App;
