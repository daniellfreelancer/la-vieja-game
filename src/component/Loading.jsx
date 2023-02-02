import React from 'react'
import '../styles/Loading.css'

export default function Loading() {
    return (
        <div className='div-loading'>


            <div className="wrapper">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
            </div>
            <h1>Game is loading...</h1>
        </div>
    )
}
