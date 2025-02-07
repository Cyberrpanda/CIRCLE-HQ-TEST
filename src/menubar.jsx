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
import Stars from "./stars";



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
         
          <div className="content-wrapper" style={{ display: "flex" }}>
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

            <section className="new-section-1"> 
            <form  className="search-form"> 
              <input
                
                type="text"
                placeholder="Search..."
                className="search-input"
              />
              <div className="options">
              <select name="" id="">
                <option value="0">Channel</option>
                <option value="1"></option>
              </select>

              <select name="" id="">
                <option value="0">Assigned to</option>
                <option value="1"></option>
              </select>
              </div>
            </form>

            <div className="messages">
            <div className="messages-1">
              <span><h2>mistalogikk@gmail.com</h2> <div className="right-items">Now<Stars/></div> </span>
              <h3>Havent gotten my refund</h3>
              <h4>Hello vendor, I have shipped the product but haven...</h4>
            </div>
            <div className="messages-1">s
              <span><h2>+234 (810) 234 5678</h2> <div className="right-items">Now<Stars/></div></span>
              <h3>Havent gotten my refund</h3>
              <h4>Hello vendor, I have shipped the product but haven...</h4>
            </div>
            <div className="messages-1">
              <span><h2>israelajala@gmail.com</h2> <div className="right-items">Now<Stars/></div></span>
              <h3>Havent gotten my refund</h3>
              <h4>Hello vendor, I have shipped the product but haven...</h4>
            </div>
            <div className="messages-1">
              <span><h2>+234 (810) 234 5678</h2> <div className="right-items">Now<Stars/></div></span> 
              <h3>Havent gotten my refund</h3>
              <h4>Hello vendor, I have shipped the product but haven...</h4>
            </div>
            <div className="messages-1">
              <span><h2>mistalogikk@gmail.com</h2> <div className="right-items">Now<Stars/></div></span>
              <h3>Havent gotten my refund</h3>
              <h4>Hello vendor, I have shipped the product but haven...</h4>
            </div>
            </div>
            </section>

            <section className="new-section-2">
                 <Chat/> 
                 <h3>No Messages Selected</h3>
                 <h4>Select a message to open conversation and get started</h4>
            </section>

          </div>
          
          

          
        </div>
      </div>
    </div>
  );
}