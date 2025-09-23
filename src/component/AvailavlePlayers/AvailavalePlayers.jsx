import React, { use } from 'react';
import userImg from '../../assets/user1.png'

const AvailavalePlayers = ({ playerPromise }) => {
    const playerData = use(playerPromise)
    playerData.map(playerData => console.log(playerData.name, playerData.country))
    return (
        <div className='max-w-[1200px] mx-auto mb-5 mt-5 grid grid-cols-1 md:grid-cols-3 gap-3'>

            {
                playerData.map(player=><div className=" shadow-sm p-3 rounded-lg">
                <figure>
                    <img className='w-full h-1/2  md:w-full md:h-80  rounded-lg'
                        src={player.image}
                        alt="player" />
                </figure>
                <div className="flex items-center mt-4 gap-2">
                    <img  src={userImg} alt="" />
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
                        <button className='btn'>Choose Player</button>
                    </div>
                </div>

                
            </div>)
            }
            
        </div>
    );
};

export default AvailavalePlayers;