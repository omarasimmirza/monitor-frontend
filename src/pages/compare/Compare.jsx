import "./compare.scss";
import React, { useState, useEffect } from 'react'
import server from './server.png';
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import axios from 'axios';

const Compare = () => {

    const [machines, setMachines] = useState([]);

    const fetchMachines = () => {
        axios.get("http://127.0.0.1:8080/").then(res => {
            console.log(res);
            setMachines(res.data);
        });
    };

    useEffect(() => {
        fetchMachines();
    }, []);

    return machines.map((machine, index) => {
        return (
            <div key={index}>
                <div className="compare">
                    <div className="container">
                        <img className="image" src={server} alt="server"/>
                        <span className="title">{machine.ip}</span>
                        <div className="align">
                            <span className="info">port: {machine.port}</span>
                            <span className="info">username: {machine.username}</span>
                            <span className="link">mail: {machine.mail}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    });
};

export default Compare;