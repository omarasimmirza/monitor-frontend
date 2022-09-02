import "./widget.scss";
import React from 'react'
import server from './server.png';
import { useNavigate } from "react-router-dom";

const Widget = ({ machines }) => {

    const navigate = useNavigate();

    const getDetails = (ip) => {
        navigate(`/${ip}`)
    }

    return machines.map((machine, index) => {
        return (
            <div key={index}>
                <div className="widget" onClick={() => getDetails(machine.ip)}>
                    <div className="container">
                        <img className="image" src={server} alt="server" />
                        <span className="title">{machine.ip}</span>
                        <div className="align">
                            <span className="info" style={{ textDecoration: "none" }}>port: {machine.port}</span>
                            <span style={{ textDecoration: "none" }} className="info">username: {machine.username}</span>
                            <span style={{ textDecoration: "none" }} className="link">mail: {machine.mail}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    });
};

export default Widget;