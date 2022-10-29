import { Link } from "react-router-dom";

const Header = () => (
  <>
    <div className="App-header">
      <h1>
        <Link to={`/login`}>ログイン</Link>
      </h1>
      <div>
        新規登録は<Link to={`/signup`}>こちら</Link>
      </div>
      <div>
        <Link to={`/home`}>ホームに戻る</Link>
      </div>
    </div>
  </>
);

export default Header;
