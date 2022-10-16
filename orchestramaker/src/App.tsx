import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<FrontPage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

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

const Footer = () => {
  const style = {
    width: "100px",
  };
  return (
    <div>
      <ul style={style}>
        <li>
          <Link to="/">トップページ</Link>
        </li>
        <li>
          <Link to="/about">私たちについて</Link>
        </li>
      </ul>
    </div>
  );
};

const FrontPage = () => {
  return (
    <div>
      私たちのAIはオーケストレーションをサポートすることによって,編曲を行う際の,初心者のハードルを下げます.
      •ピアノなどの楽譜データからバンド構成または,フルオーケストラ構成へオーケストレーションを自動で行い,編曲をするAIの制作を目指す
    </div>
  );
};

export default App;
