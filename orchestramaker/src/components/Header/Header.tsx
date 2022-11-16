import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderTag = styled.div`
  height: 7%;
  display: flex;
  align-items: center;
  position: fixed; /* ヘッダーを固定する */
  top: 0; /* 上部から配置の基準位置を決める */
  left: 0; /* 左から配置の基準位置を決める */
  width: 100%; /* ヘッダーの横幅を指定する */
  height: 70px; /* ヘッダーの高さを指定する */
  /* padding: 20px; ヘッダー内側の余白を指定する(上下左右) */
  /* justify-content: center; */
  background-color: white;
  border-bottom: solid 1px #b6b6b6;
  z-index: 10;

  .btnUl {
    overflow: hidden;
    list-style: none;
    margin-left: auto;
    /* margin: 0 auto; */
    z-index: 20;
  }

  li {
    display: inline-block;
    padding: 26px 10px 20px 10px;
  }

  .btn {
    text-align: right;
    padding: 10px 10px;
    display: block;
    text-decoration: none;
    color: black;
    border-radius: 4px;
  }
  .btn:hover {
    cursor: pointer;
    background-color: #e3e3e3;
    transition: 0.3s;
  }

  .logo {
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
    margin-right: auto;
    text-align: left;
    padding: 10px 15px;
    display: block;
    text-decoration: none;
    color: black;
    border-radius: 4px;
  }
  .logo:hover {
    cursor: pointer;
    background-color: #e3e3e3;
    transition: 0.3s;
  }
`;

const Header = () => (
  <>
    <HeaderTag>
      <ul>
        <li>
          <a href="/" className="logo">
            OrchestraMaker
          </a>
        </li>
      </ul>
      <ul className="btnUl">
        <li>
          <Link to={`/login`} className="btn">
            ログイン
          </Link>
        </li>
        <li>
          <Link to={`/home`} className="btn">
            マイページ
          </Link>
        </li>
      </ul>
    </HeaderTag>
  </>
);

export default Header;
