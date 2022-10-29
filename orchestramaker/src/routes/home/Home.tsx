import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar";
import styled from "styled-components";
import "../../App.css";

const Homediv = styled.div`
  width: 100%;
  height: 100vh;
  * {
    margin: 0%;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Home = () => {
  return (
    <>
      <Homediv>
        <Header />
        <Sidebar />
        <Footer />
      </Homediv>
    </>
  );
};

export default Home;
