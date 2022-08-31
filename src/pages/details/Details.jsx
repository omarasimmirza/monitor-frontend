import "./details.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import server from "../../components/widget/server.png"
import { useParams } from "react-router-dom";
import service from "../../service/service"
import { useState, useEffect     } from "react";

const Details = () => {

    const {ip} = useParams();
    const [machine, setMachine] = useState({});

    const fetchMachine = () => {
        service.get(ip).then(res => {
            console.log(res);
            setMachine(res.data);
            console.log(machine)
        });
    };
    
    useEffect(() => {
      fetchMachine();
    }, []);
    

    return (
        <div className="details">
            <Sidebar />
            <div className="detailsContainer">
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img
                                src={server}
                                alt=""
                                className="itemImg"
                            />
                            <div className="details">
                                <h1 className="itemTitle">{ip}</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">{machine.mail}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Username:</span>
                                    <span className="itemValue">{machine.uptime}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Port:</span>
                                    <span className="itemValue">
                                        {machine.port}
                                    </span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Country:</span>
                                    <span className="itemValue">USA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        {/* <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" /> */}
                    </div>
                </div>
                {/* <div className="bottom">
                    <h1 className="title">Last Transactions</h1>
                    <List />
                </div> */}
            </div>
        </div>
    );
};

export default Details;
