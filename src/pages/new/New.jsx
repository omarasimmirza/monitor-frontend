import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import server from "../../components/widget/server.png";
// import Machine from '../../model/Machine';

const New = () => {
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
                        <form>
                            <div className="formInput">
                                <label>IP</label>
                                <input type="text"/>
                            </div>
                            <div className="formInput">
                                <label>Port</label>
                                <input type="text"/>
                            </div>
                            <div className="formInput">
                                <label>Username</label>
                                <input type="text"/>
                            </div>
                            <div className="formInput">
                                <label>Password</label>
                                <input type="password"/>
                            </div>
                            <div className="formInput">
                                <label>Email</label>
                                <input type="text"/>
                            </div>
                            <div className="center">
                                <button>Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default New;