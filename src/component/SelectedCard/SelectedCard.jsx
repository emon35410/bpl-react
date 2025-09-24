import React from 'react';
import deleteImg from '../../assets/Delete.png'
const SelectedCard = ({player,removePlyer}) => {
    const handleRemove =()=>{
        removePlyer(  
           player
        )
    }
    return (
         <div className='max-w-[1200px] mx-auto shadow-sm rounded-lg flex justify-between items-center  p-3 mt-5'>
            <div className='flex justify-between items-center gap-4'>
            
                <img className='w-[70px] h-[70px] rounded-2xl' src={player.image} alt="" />
                
                <div>
                    <h2>{player.name}</h2>
                <p>{player.playingType}</p>
                
                </div>
                
            </div>
            <img className='hover:cursor-pointer' onClick={(handleRemove)} src={deleteImg} alt="" />
        </div>
       
            
        
    );
};

export default SelectedCard;