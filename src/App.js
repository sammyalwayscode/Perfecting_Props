import React from 'react'
import HomeCard from './Components/HomeCards/HomeCard'
import PropsC from './Components/PropsClass/PropsC'

function App() {
  return (
    <div>
      {/* <HomeCard /> */}
      <PropsC name="Ade" backgroundColor="green" color="white" />
      <PropsC name="Bisi" backgroundColor="red" color="yellow" />
      <PropsC name="Kola" backgroundColor="brown" color="gray" />

    </div>
  );
}

export default App;
