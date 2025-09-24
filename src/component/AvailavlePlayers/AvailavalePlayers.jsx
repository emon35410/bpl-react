import React, { use } from 'react';
import PlayerCard from '../playerCard/PlayerCard';

const AvailavalePlayers = ({ playerPromise,setAvailableBalance,AvailableBalance,selectedPlayers,setselectedPlayers }) => {
    const playerData = use(playerPromise)
    return (
        <div className='max-w-[1200px] mx-auto mb-5 mt-5 grid grid-cols-1 md:grid-cols-3 gap-3'>

            {
                playerData.map((player,index) => <PlayerCard key={index} selectedPlayers={selectedPlayers} setselectedPlayers={setselectedPlayers} AvailableBalance={AvailableBalance} setAvailableBalance={setAvailableBalance} player={player}></PlayerCard>
                )
            }

        </div>
    );
};

export default AvailavalePlayers;