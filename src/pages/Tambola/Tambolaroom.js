import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import { SocketContext, socket } from './socketconfig';
import "./TambolaRoom.css";

const Room = () => {
    const value = "Generated Number";
    const [randNum , setRandNum] = useState(value);
    const [users , setusers] = useState([]);
    const {roomid}  = useParams();
    socket.on("getusers",(obj)=>{
        setusers(obj.data);
    })
    useEffect(() => {
        socket.emit("getusers", roomid);
    }, [socket, roomid])


    let i = 0;
    const clickEvent = () => {
      setRandNum(RandNum[i++]);
    }

    const CardData =[
      [0,18,23,40,48,0,0,73,0],
      [5,0,0,0,42,52,0,80,83],
      [0,20,0,0,49,58,65,72,85]
    ];

    const RandNum =[72,65,47,89,42,4,61,84,36,22,37,18,9,27,
      12,71,46,15,30,55,17,3,56,25,68,80,43,26,
      50,39,53,38,60,31,28,11,8,62,49,79,51,35,
      14,67,45,41,40,5,44,34,73,32,86,69,70,48,
      21,33,83,13,54,77,78,90,29,6,52,59,58,66,
      76,1,10,24,19,64,85,7,74,2,16,63,88,23,57
      ,87,81,82,20,75
    ];

    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-8 col-12 mx-auto">
              <h1>{users}</h1>
              <h1 className="room-id">Room Id : {roomid}</h1>
              <div className="gernerate-number-btn" onClick={clickEvent}>Gernerate Number</div>
              <div className="gernerated-number">{randNum}</div>
              <div >
                <Table body={CardData} bgcolor={randNum}/>
              </div>
              <ul>
                <li>Jaldi 5</li>
                <li>Corners</li>
                <li>Row First</li>
                <li>Row Second</li>
                <li>Row Third</li>
                <li>Full Housie</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
}

const Table = (props) => {
  return (
    <table className="text-warning mx-auto mb-4">
        <tbody>
            {props.body.map((row,index) => <TableRow key={index} row={row}  bgColor={props.bgcolor} />)}
        </tbody>
    </table>
);
}

const TableRow = (props) => {
    return (
      <tr>
          {props.row.map((val,index) => <td className={props.bgColor==val?"SelectedCell":""}>{val}</td>)}
      </tr>
    );
}

export default Room;