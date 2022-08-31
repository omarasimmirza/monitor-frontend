import "./widget.scss";
import React, { useState, useEffect } from 'react'
import server from './server.png';
import { useNavigate } from "react-router-dom";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
// import axios from 'axios';
import service from '../../service/service';

const Widget = () => {

    const [machines, setMachines] = useState([]);
    const navigate = useNavigate();

    const fetchMachines = () => {
        service.getAll().then(res => {
            console.log(res);
            setMachines(res.data);
        });
    };

    useEffect(() => {
        fetchMachines();
    }, []);

    const getDetails = (ip) => {
        console.log("here")
        navigate(`${ip}`)   
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