import "./manage.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import server from "../../components/widget/server.png";

const Manage = () => {
  return (
    <div className="manage">
      <Sidebar />
      <div className="manageContainer">
        <div className="top">
          {/* <h1>{title}</h1> */}
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={server}
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
              </div>

              {/* {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))} */}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manage;