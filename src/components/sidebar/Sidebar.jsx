import "./sidebar.scss";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { Compare, Engineering, GitHub, LinkedIn, SearchOutlined, Storage } from "@mui/icons-material";

const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">Machine Manager</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <div className="search">
                        <input type="text" placeholder="Search..." />
                        <SearchOutlined />
                    </div>
                    <p className="title">PAGES</p>
                    <Link to="/machines" style={{ textDecoration: "none" }}>
                        <li>
                            <Storage className="icon" />
                            <span>Machines</span>
                        </li>
                    </Link>
                    <Link to="/compare" style={{ textDecoration: "none" }}>
                        <li>
                            <Compare className="icon" />
                            <span>Compare</span>
                        </li>
                    </Link>
                    <Link to="/manage" style={{ textDecoration: "none" }}>
                        <li>
                            <Engineering className="icon" />
                            <span>Manage</span>
                        </li>
                    </Link>
                    <p className="title">SOCIALS</p>
                    <li>
                        <LinkedIn className="icon" />
                        <a href="https://www.linkedin.com/in/omar-mirza-56544a11b">LinkedIn</a>
                    </li>
                    <li>
                        <GitHub className="icon" />
                        <a href="https://github.com/omarasimmirza">Github</a>
                    </li>
                    <p className="title">THEMES</p>
                </ul>
            </div>
            <div className="bottom">
                <div
                    className="colorOption"
                    onClick={() => dispatch({ type: "LIGHT" })}
                ></div>
                <div
                    className="colorOption"
                    onClick={() => dispatch({ type: "DARK" })}
                ></div>
            </div>
        </div>
    );
};

export default Sidebar;
