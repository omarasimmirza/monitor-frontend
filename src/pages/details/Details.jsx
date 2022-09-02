import "./details.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import server from "../../components/widget/server.png"
import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

const Details = ({handleGetOne, handleDelete, oneMachine}) => {

    const { ip } = useParams();
    const navigate = useNavigate();
    

    const edit = () => {
        navigate(`edit`)
    }

    const deleteMachine = () => {
        handleDelete(ip);
        navigate(`/`)
        window.location.reload(false);
    }
    
    useEffect(() => {
        handleGetOne(ip);
    }, []);

    return oneMachine.map((single, index) => {
        return (
            <div key={index}>
                <div className="details">
                    <Sidebar />
                    <div className="detailsContainer">
                        <div className="top">
                            <div className="left">
                                <div className="editButton" onClick={() => edit()}>Edit</div>
                                <div className="deleteButton" onClick={() => deleteMachine()}>Delete</div>
                                <h1 className="title">Information</h1>
                                <h1 className="itemTitle">{single.ip}</h1>
                                <div className="item">
                                    <img
                                        src={server}
                                        alt=""
                                        className="itemImg"
                                    />
                                    <div className="details">
                                        <div className="detailItem">
                                            <span className="itemKey">Port:</span>
                                            <span className="itemValue">{single.port}</span>
                                        </div>
                                        <div className="detailItem">
                                            <span className="itemKey">Username:</span>
                                            <span className="itemValue">{single.username}</span>
                                        </div>
                                        <div className="detailItem">
                                            <span className="itemKey">Email:</span>
                                            <span className="itemValue">{single.mail}</span>
                                        </div>
                                        <div className="detailItem">
                                            <span className="itemKey">Cpu Usage:</span>
                                            <span className="itemValue"> {single.cpu_usage}%</span>
                                        </div>
                                        <div className="detailItem">
                                            <span className="itemKey">Memory Usage:</span>
                                            <span className="itemValue">{single.memory_usage}%</span>
                                        </div>
                                        <div className="detailItem">
                                            <span className="itemKey">Cpu Uptime:</span>
                                            <span className="itemValue">{single.cpu_uptime}cs</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    })
};

export default Details;
