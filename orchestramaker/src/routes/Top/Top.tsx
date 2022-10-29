import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styled from "styled-components";
import "../../App.css";

const Topdiv = styled.div`
  width: 100%;
  height: 100vh;
  * {
    margin: 0%;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Top = () => {
  return (
    <>
      <Topdiv>
        <Header />
        <Footer />
      </Topdiv>
    </>
  );
};

export default Top;
