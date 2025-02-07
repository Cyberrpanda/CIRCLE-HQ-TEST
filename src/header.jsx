import "./index.css";
import Notify from "./notification";

export default function Header() {
  return (
    <>
      <div className="menu-grid">
        <div className="menu-2">
          <div>
            <h1>Shared Inbox</h1>
          </div>

          <div className="menu-2__1">
            <Notify />
            <div>
              <h3>Abubakar Ismail</h3>
              <h4>Administrator</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
