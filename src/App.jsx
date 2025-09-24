import './App.css'

import AvailavalePlayers from './component/AvailavlePlayers/AvailavalePlayers'
import Navbar from './component/Navbar/Navbar'
import SelectedPlayers from './component/SelectedPlayers/SelectedPlayers'
import { Suspense, useState } from 'react'


const fechPlayers = async () => {
  const res = await fetch('/players.json')
  return res.json();
}
const playerPromise = fechPlayers()

function App() {

  const [toggle, settoggle] = useState(true)
  const [AvailableBalance, setAvailableBalance] = useState(10000000)
  const [selectedPlayers, setselectedPlayers] = useState([])


  return (
    <>
      <Navbar AvailableBalance={AvailableBalance}></Navbar>
      <div className='max-w-[1200px] mx-auto flex justify-between items-center'>
        <h1 className=''>Availavale Players</h1>
        <div>
          <button onClick={() => settoggle(true)} className={` border-gray-400 border-1 py-3 px-3 rounded-l-2xl border-r-0 hover:cursor-pointer ${toggle === true ? "bg-[#E7FE29]" : ""}`}>Available</button>
          <button onClick={() => settoggle(false)} className={` border-gray-400 border-1 py-3 px-3 rounded-r-2xl border-l-0 hover:cursor-pointer ${toggle === false ? "bg-[#E7FE29]" : ""}`} >Selected <span>({selectedPlayers.length})</span></button>
        </div>
      </div>
      {
        toggle === true ?
          <Suspense fallback={<div className="flex items-center justify-center pt-6">
            <span className="loading loading-spinner text-info"></span>
          </div>
          }>
            <AvailavalePlayers selectedPlayers={selectedPlayers} setselectedPlayers={setselectedPlayers} AvailableBalance={AvailableBalance} setAvailableBalance={setAvailableBalance} playerPromise={playerPromise}></AvailavalePlayers>
          </Suspense> : <SelectedPlayers selectedPlayers={selectedPlayers}></SelectedPlayers>
      }



    </>
  )
}

export default App
