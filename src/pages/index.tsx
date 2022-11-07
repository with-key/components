import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <StContainer>
      <Link href="/select">select</Link>
      <Link href="/table">table</Link>
    </StContainer>
  );
};

export default Home;

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 100px;
`;
