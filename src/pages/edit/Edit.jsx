import "./edit.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import server from "../../components/widget/server.png"
import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

const Edit = ({ handleEdit, handleGetOne, oneMachine, mail, setMail }) => {

    const { ip } = useParams();
    const navigate = useNavigate();

    const done = () => {
        handleEdit(ip)
        navigate(`/${ip}`)
        window.location.reload(false)
    }

    useEffect(() => {
        handleGetOne(ip);
    }, []);

    return oneMachine.map((single, index) => {
        return (
            <div key={index}>
                <div className="edit">
                    <Sidebar />
                    <div className="editContainer">
                        <div className="top">
                            <div className="left">
                                <div className="doneButton" onClick={() => done()}>Done</div>
                                <h1 className="title">Information</h1>
                                <h1 className="itemTitle">{single.ip}</h1>
                                <div className="item">
                                    <img
                                        src={server}
                                        alt=""
                                        className="itemImg"
                                    />
                                    <div className="edit">
                                        <div className="editItem">
                                            <span className="itemKey">Port:</span>
                                            <span className="itemValue">{single.port}</span>
                                        </div>
                                        <div className="editItem">
                                            <span className="itemKey">Username:</span>
                                            <span className="itemValue">{single.username}</span>
                                        </div>
                                        <div className="editItem">
                                            <span className="itemKey">Email:</span>
                                            { }
                                            <input className="inputField" type="text" placeholder="New Email" id="mail" value={mail} onChange={(e) => setMail(e.target.value)} />
                                        </div>
                                        <div className="editItem">
                                            <span className="itemKey">Cpu Usage:</span>
                                            <span className="itemValue"> {single.cpu_usage}%</span>
                                        </div>
                                        <div className="editItem">
                                            <span className="itemKey">Memory Usage:</span>
                                            <span className="itemValue">{single.memory_usage}%</span>
                                        </div>
                                        <div className="editItem">
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

export default Edit;
