import React from 'react'
import xplayer from '../assets/letra-x.png'
import oplayer from '../assets/letra-o.png'
import '../styles/Reference.css'
import equal from '../assets/equal.png'

export default function Reference(props) {
  return (
    <div className='div-reference' >
        <h2 className='player-title'> Players </h2>

        <div className='div-all-players'>
        <div className='div-player'>
            <img src={props.cat} alt='cat-icon' />
            <img src={equal} className='equal-icon' alt='equal-icon'/>
            <img src={xplayer} alt='x-icon' />
        </div>
        <div className='div-player'>
            <img src={props.dog} alt='dog-icon' />
            <img src={equal} className='equal-icon' alt='equal-icon'/>
            <img src={oplayer} alt='o-icon' />
        </div>
        </div>


    </div>
  )
}
