import React from "react";
import styled from "styled-components";
import { SidebarData } from "./SidebarData";

const Sidebardiv = styled.div`
  height: 100%;
  width: 250px;
  background-color: white;
  border-right: solid 1px #b6b6b6;
  /* padding-top: 70px; */
  padding-bottom: 100px; /*←footerの高さ*/
  box-sizing: border-box; /*←全て含めてmin-height:100vhに*/
  position: fixed; /* ヘッダーを固定する */

  .SiderbarList {
    padding-top: 70px;
    height: auto;
    /* padding: 0; */
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
    justify-content: center;
    align-items: center;
  }
  .row:hover {
    cursor: pointer;
    background-color: #e3e3e3;
    transition: 0.2s;
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
