import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';


const SelectedPlayers = ({ selectedPlayers,removePlyer }) => {

    return (
        <div>
            {
                selectedPlayers.map((player,index) => <SelectedCard key={index} removePlyer={removePlyer} player={player}></SelectedCard>)
            }
        </div>

    );

};

export default SelectedPlayers;