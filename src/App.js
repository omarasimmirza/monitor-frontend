import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/dark.scss";
import { useContext, useState, useEffect } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import New from "./pages/new/New";
import Manage from "./pages/manage/Manage";
import Compare from "./pages/compare/Compare";
import Edit from "./pages/edit/Edit";
import Details from "./pages/details/Details";
import service from './service/service';

function App() {
  const [machines, setMachines] = useState([]);
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
      } catch(err) {
        console.log(`Error: $[err.message]`);
      }
    }
    
    fetchMachines();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const 
  }
  
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="new" element={<New />} />
            <Route path="compare" element={<Compare />} />
            <Route path="manage" element={<Manage />} />
            <Route path="edit" element={<Edit />} />
            <Route path=":ip" element={<Details/>} />
            {/* <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;