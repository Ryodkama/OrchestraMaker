import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Header = () => (
  <>
    <title>オーケストラメイカー</title>
    <h1>ログインページ</h1>

    <div>
      新規登録は<Link to={`/signup`}>こちら</Link>
    </div>
    <div>
      <Link to={`/`}>ホームに戻る</Link>
    </div>
  </>
);

export default Header;
