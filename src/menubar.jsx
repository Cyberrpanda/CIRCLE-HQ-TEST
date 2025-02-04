import "./index.css";
import { ReactComponent as Dash } from "./assets/dash-line.svg";
export default function Menu() {
  return (
    <>
      <div className="menu-grid">
        <div className="menu-grid__row">
          <div className="menu-grid__row-1">
            <img
              src=".assets/circlehq_logo-removebg-preview.png"
              className="menu-logo"
              alt="circlehq"
            />
            <div className="menu-grid__annex">
             <Dash/>
            </div>
          </div>

          <div className="menu-grid__row-1">
            <h1>Shared Inbox</h1>
          </div>

          <div className="menu-grid__row-2">
            <p>
              <h3>Abubakar Ismail</h3>
              <h4>Administrator</h4>
            </p>
          </div>         
          
        </div>

        
        
      </div>
    </>
  );
}
