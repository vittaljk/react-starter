import React from 'react'
import './DrawCity.scss';
import Home from '../assets/images/home.jpeg';
import RoadHorizontal from '../assets/images/road_horizontal.jpg';
import RoadVertical from '../assets/images/road_vertical.jpg';

function DrawCity() {
    const allowDrop = (ev) => {
        ev.preventDefault();
    }

    const drag = (ev) => {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    const drop = (ev, i) => {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        if (document.getElementById(data)) {
            let nodeCopy = document.getElementById(data).cloneNode(true);
            nodeCopy.id = 'id' + i;
            ev.target.appendChild(nodeCopy);
        }
    }
    
    return (
        <div className="container">
            <div className="puzzle-img-wrapper">
                <img id="home" className="puzzle-img" src={Home} draggable="true" onDragStart={(e) => drag(e)} width="336" height="69" alt="img"></img>
                <img id="roadh" className="puzzle-img" src={RoadHorizontal} draggable="true" onDragStart={(e) => drag(e)} width="336" height="69" alt="img"></img>
                <img id="roadv" className="puzzle-img" src={RoadVertical} draggable="true" onDragStart={(e) => drag(e)} width="336" height="69" alt="img"></img>
            </div>
            <div className="parent">
                {[...Array(900)].map((e, i) =>  <div key={i} className="children" onDrop={(e) => drop(e, i)} onDragOver={(e) => allowDrop(e)}></div>)}
            </div>  
        </div>
    )
}

export default DrawCity
