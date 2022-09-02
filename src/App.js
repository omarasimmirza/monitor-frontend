import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/dark.scss";
import { useContext, useState, useEffect } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import New from "./pages/new/New";
import Compare from "./pages/compare/Compare";
import Edit from "./pages/edit/Edit";
import Details from "./pages/details/Details";
import service from './service/service';

function App() {
  const [machines, setMachines] = useState([]);
  const [oneMachine, setOneMachine] = useState([]);
  const [ip, setIp] = useState('');
  const [port, setPort] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mail, setMail] = useState('');
  const [alert, setAlert] = useState([]);
  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    const fetchMachines = async () => {
      try {
        const response = await service.getAll();
        setMachines(response.data);
      } catch (err) {
        console.log(`Error: $[err.message]`);
      }
    }

    fetchMachines();
  }, []);

  const handlePost = async (e) => {
    e.preventDefault();
    const newMachine = { "0": {ip: ip, port: port, username: username, password: password, mail: mail, alert: alert }};
    console.log(newMachine);
    console.log('came here')
    try {
      await service.create(newMachine);
    }
    catch (e) {
      console.log(`Error: ${e}`);
    }
  }

  const handleEdit = async (ip) => {
    const updatedMachine = { mail: mail }
    try {
      await service.update(ip, updatedMachine);
    }
    catch (e) {
      console.log(`Error: ${e}`);
    }
  }

  const handleDelete = async (ip) => {
    try {
      console.log('came to delete')
      await service.remove(`${ip}`);
    }
    catch (e) {
      console.log(`Error: ${e}`);
    }
  }

  const handleGetOne = async (ip) => {
    try {
      const response = await service.get(ip);
      setOneMachine(response.data);
    }
    catch (e) {
      console.log(e)
    }
  }

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home 
              machines={machines}
            />} />
            <Route path="new" element={<New
              handlePost={handlePost}
              ip={ip}
              setIp={setIp}
              port={port}
              setPort={setPort}
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              mail={mail}
              setMail={setMail}
              alert={alert}
              setAlert={setAlert}
            />} />
            <Route path="compare" element={<Compare 
              machines={machines}
            />} />
            <Route path=":ip/edit" element={<Edit 
              handleEdit={handleEdit}
              handleGetOne={handleGetOne}
              oneMachine={oneMachine}
              mail={mail}
              setMail={setMail}
            />} />
            <Route path=":ip" element={<Details 
              handleGetOne={handleGetOne}
              handleDelete={handleDelete}
              oneMachine={oneMachine}
            />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;