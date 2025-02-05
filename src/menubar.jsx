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
    <div className="menu-grid">
      <div className="menu-grid__row">
        <div className="menu-grid__row-1">
          <img
            src="../src/assets/circlehq_logo-removebg-preview.png"
            className="menu-logo"
            alt="circlehq"
          />
          <div className="menu-grid__annex">
            <DashLine className="svg-icon" />
            <Collage className="svg-icon" />
            <Inbox className="svg-icon" />
            <Speaker className="svg-icon" />
            <Fblock className="svg-icon" />
            <DoubleBio className="svg-icon" />
            <FileCopy className="svg-icon" />
            <File className="svg-icon" />
            <Settings className="svg-icon" />
          </div>
        </div>
        
        <div className="menu-grid__row-1">
          <h1>Shared Inbox</h1>
        </div>
        
        <div className="menu-grid__row-2">
          <div>
            <h3>Abubakar Ismail</h3>
            <h4>Administrator</h4>
          </div>
        </div>
      </div>
    </div>
  );
}