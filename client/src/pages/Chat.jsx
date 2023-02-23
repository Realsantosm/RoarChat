import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from 'axios';

const Chat = () => {
  const [contacts, setContacts] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(async () => {
    
    }
  },[]);
  return (
    <Container>
      <div className="container"></div>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  // background-color: #f55;
  .container {
    height: 85vh;
    width: 85vw;
    background-color: #00000076;
    // background-color: #f55;

    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;

export default Chat;
