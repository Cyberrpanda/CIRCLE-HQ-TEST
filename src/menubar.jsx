import "./index.css";
import Collage from "./photo-collage";
import DashLine from "./dashline";
import Inbox from "./inbox";
import Speaker from "./speaker";
import Fblock from "./file-blk";
import DoubleBio from "./two-bios";
import FileCopy from "./file-copy";
import File from "./file";
import Settings from "./settings";

export default function Menu() {
  return (
    <>
      <div className="menu-grid">
        <div className="menu-grid__row">
          <div className="menu-grid__row-1">
            <img
              src="../src/assets/circlehq_logo-removebg-preview.png"
              className="menu-logo"
              alt="circlehq"
            />
            <div className="menu-grid__annex">
            <DashLine stroke="grey" className="svg-icon" width="100" height="24" />
            <br />
            <Collage stroke="grey" className="svg-icon" width="100" height="24" />
            <Inbox stroke="grey" className="svg-icon" width="100" height="24" />
            <Speaker stroke="grey" className="svg-icon" width="100" height="24" />
            <Fblock stroke="grey" className="svg-icon" width="100" height="24" />
            <DoubleBio stroke="grey" className="svg-icon" width="100" height="24" />
            <FileCopy stroke="grey" className="svg-icon" width="100" height="24" />
            <File stroke="grey" className="svg-icon" width="100" height="24" />
            <Settings stroke="grey" className="svg-icon" width="100" height="24" />
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
