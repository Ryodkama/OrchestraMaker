import React from "react";
import styled from "styled-components";

const FooterTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-top: solid 1px #b6b6b6;
  height: 100px;
  width: 100%;
  padding: 30px 0;
  position: absolute; /*←絶対位置*/
  bottom: 0; /*下に固定*/
`;

const Footer = () => {
  return (
    <FooterTag>
      <p>Copyright &copy; OrchestraMaker 2022</p>
    </FooterTag>
  );
};

export default Footer;
