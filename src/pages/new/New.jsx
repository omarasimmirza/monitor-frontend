import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import server from "../../components/widget/server.png";

const New = ({ handlePost, ip, setIp, port, setPort,
    username, setUsername, password, setPassword, mail,
    setMail, alert, setAlert }) => {
        
    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <div className="top">
                    <h1>Add New Machine</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img
                            src={server}
                            alt="server"
                        />
                    </div>
                    <div className="right">
                        <form onSubmit={handlePost}>
                            <div className="formInput">
                                <label>IP</label>
                                <input type="text" id="ip" value={ip} onChange={(e) => setIp(e.target.value)} />
                            </div>
                            <div className="formInput">
                                <label>Port</label>
                                <input type="text" id="port" value={port} onChange={(e) => setPort(e.target.value)} />
                            </div>
                            <div className="formInput">
                                <label>Username</label>
                                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div className="formInput">
                                <label>Password</label>
                                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="formInput">
                                <label>Email</label>
                                <input type="text" id="mail" value={mail} onChange={(e) => setMail(e.target.value)} />
                            </div>
                            <div className="center">
                                <button type="submit">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default New;