import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddInvitee from './components/AddInvitee';


export interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Lebron James",
      age: 34,
      url: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&w=350&h=254",
      note: "A very excellent player"
    }
  ])

  return (
    <div className="App">
      <h1>People invited to my party</h1>
      <List people={people} />
      <AddInvitee people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
