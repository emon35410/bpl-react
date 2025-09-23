import './App.css'
import navImg from './assets/logo.png'
import dollarImg from './assets/dollar.png'
import AvailavalePlayers from './component/AvailavlePlayers/AvailavalePlayers'
import SelectedPlayers from './component/SelectedPlayers/SelectedPlayers'
import { Suspense } from 'react'


const fechPlayers = async () => {
  const res = await fetch('/players.json')
  return res.json();
}
function App() {
  const playerPromise = fechPlayers()

  return (
    <>
      <div className="navbar max-w-[1200px] mx-auto pt-3 text-center">
        <div className="flex-1">
          <img src={navImg} alt="NavImg" />
        </div>
        <div className="flex gap-2 items-center">
          <span>6000000</span>
          <span>Coin</span>
          <img src={dollarImg} alt="DollarImg" />
        </div>
      </div>
      <div className='max-w-[1200px] mx-auto flex justify-between items-center'>
        <h1 className=''>Availavale Players</h1>
        <div>
          <button className='btn'>Available</button>
            <button className='btn'>Selected (0)</button>
        </div>
      </div>


      <Suspense fallback={<span className="loading loading-spinner text-info"></span>}>
        <AvailavalePlayers playerPromise={playerPromise}></AvailavalePlayers>
      </Suspense>
      <SelectedPlayers></SelectedPlayers>

    </>
  )
}

export default App
