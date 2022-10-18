import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "../../../App.css";

const Header = () => (
  <>
    <div className="App-header">
      <h1>ログインページ</h1>
      <div>
        新規登録は<Link to={`/signup`}>こちら</Link>
      </div>
      <div>
        <Link to={`/`}>ホームに戻る</Link>
      </div>
    </div>
  </>
);

export default Header;
