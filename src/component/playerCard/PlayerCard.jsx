import React, { useState } from 'react';
import userImg from '../../assets/user1.png'

const PlayerCard = ({ player, setAvailableBalance, AvailableBalance, selectedPlayers, setselectedPlayers }) => {
    const [isSelected, setisSelected] = useState(false)
    const handleSelected = (player) => {
        {
            const Price = player.buyingPrice.split("$").join("").split(",").join("")
            if (AvailableBalance > Price) {
                setisSelected(true)
                setAvailableBalance(AvailableBalance - Price)
            }
            else {
                alert("You don't have enough balance")
            }


        }
        setselectedPlayers([...selectedPlayers,player])
    }
    return (
        <div className=" shadow-sm p-3 rounded-lg">
            <figure>
                <img className='w-full h-1/2  md:w-full md:h-80  rounded-lg'
                    src={player.image}
                    alt="player" />
            </figure>
            <div className="flex items-center mt-4 gap-2">
                <img src={userImg} alt="" />
                <span className="font-semibold">{player.name}</span>
            </div>
            <div className='flex justify-between items-center pb-3  mt-4 border-b-1 '>
                <div className='flex items-center gap-2'>
                    <img className='w-6 h-4 object-cover' src={player.countryFlag} alt="" />
                    <span>{player.country}</span>
                </div>
                <button className='btn'>{player.playingType}</button>
            </div>
            <div className='mt-2'>
                <div className='flex justify-between items-center'>
                    <span>Rating</span>
                    <span>{player.rating}</span>
                </div>
                <div className='flex justify-between mt-2'>
                    <span>Batting</span>
                    <span>{player.strongHand}</span>
                </div>
                <div className='flex justify-between items-center mt-2 mb-2'>
                    <span>Price: {player.buyingPrice}</span>
                    <button onClick={() =>handleSelected(player) } className='btn'>{isSelected === true ? "Selected" : "Choose Player"}</button>
                </div>
            </div>


        </div>
    );
};

export default PlayerCard;