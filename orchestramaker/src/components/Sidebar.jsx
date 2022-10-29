import React from "react";
import styled from "styled-components";
import { SidebarData } from "./SidebarData";

const Sidebardiv = styled.div`
  height: 100%;
  width: 250px;
  background-color: white;

  .SiderbarList {
    height: auto;
    padding: 0;
    width: 100%;
  }
  .SiderbarList #active {
    background-color: #b6b9ba;
  }
  .row {
    width: 100%;
    height: 60px;
    background-color: #ffffffec;
    display: flex;
    /* color: white; */
    justify-content: center;
    align-items: center;
  }
  .row:hover {
    cursor: pointer;
    background-color: #b6b9ba;
  }
  .row #icon {
    flex: 30%;
    display: grid;
    /* place-items: center; */
  }
  .row #title {
    flex: 70%;
  }
`;

function Sidebar() {
  return (
    <>
      <Sidebardiv>
        <ul className="SiderbarList">
          {SidebarData.map((value, key) => {
            return (
              <li
                key={key}
                id={window.location.pathname === value.link ? "active" : ""}
                className="row"
                onClick={() => {
                  window.location.pathname = value.link;
                }}
              >
                <div id="icon">{value.icon}</div>
                <div id="title">{value.title}</div>
              </li>
            );
          })}
        </ul>
      </Sidebardiv>
    </>
  );
}

export default Sidebar;
