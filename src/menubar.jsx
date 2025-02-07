import "./index.css";
import Header from "./header";
import Collage from "./photo-collage";
import DashLine from "./dashline";
import Inbox from "./inbox";
import Speaker from "./speaker";
import Fblock from "./file-blk";
import DoubleBio from "./two-bios";
import FileCopy from "./file-copy";
import File from "./file";
import Settings from "./settings";
import Attention from "./attention";
import Leave from "./leave";
import Button from "./button";
import { useState } from "react";
import Chat from "./chat";
import Newmessage from "./newmsg";
import CheckedP from "./person-checked";
import Check from "./check";
import Star from "./star";
import Sadd from "./singleadd";


export default function Menu() {

  const [expandedSection, setExpandedSection] = useState("Primary");

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };


  return (
    <div className="menu-grid">
      <div className="menu-grid__row">
        {/*left side menu bar*/}
        <div className="menu-grid__row-1">
          <img
            src="../src/assets/circlehq_logo-removebg-preview.png"
            className="menu-logo"
            alt="circlehq"
          />
          <div className="menu-grid__annex">
            <DashLine className="svg-icon" />
            <Collage className="svg-icon"/>
            <Inbox className="svg-icon" />
            <Speaker className="svg-icon" />
            <Fblock className="svg-icon" />
            <DoubleBio className="svg-icon" />
            <FileCopy className="svg-icon" />
            <File className="svg-icon" />
            <Settings className="svg-icon" />
          </div>

          <div className="exempt">
          <Attention className="svg-icon"/>
          <Leave className="svg-icon"/>
          </div>
        </div>
        
        {/*Center Page*/}
        <div className="main-content-area">
          <Header/>
          <section className="message-area">
            <Button/>
            
            {["Primary", "Channel", "Direct Message", "Group Message", "Labels"].map((section) => (
              <div key={section} className="dropdown-menu">
                <p className="btnd" onClick={() => toggleSection(section)}>
                  {section} {expandedSection === section ? "▲" : "▼"}
                </p>
                {expandedSection === section && (
                  <div className="dropdown-menu__content">
                    <a href="#"><Chat/> All</a>
                    <a href="#"><Newmessage/> New</a>
                    <a href="#"><CheckedP/> Assigned to Me</a>
                    <a href="#"><Check/> Closed</a>
                    <a href="#"><Star/> Starred</a>
                    <a href="#"><Attention/> Spam</a>
                    <a href="#"><Sadd/> Add Block</a>
                  </div>
                   )}
                   </div>
                 ))}
          </section>
        </div>
      </div>
    </div>
  );
}