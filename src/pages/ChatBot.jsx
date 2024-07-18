import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useAskChatBot } from "../utils/api/Ask";

const ChatBotPage = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const { mutate, data, isLoading } = useAskChatBot();

  const handleButtonClick = (question) => {
    addMessage(question, "user");
    mutate({
      question,
    });
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputSubmit = () => {
    if (inputValue.trim()) {
      addMessage(inputValue, "user");
      mutate({
        question: inputValue,
      });
      setInputValue("");
    }
  };

  const addMessage = (text, sender) => {
    setMessages((prevMessages) => [...prevMessages, { text, sender }]);
  };

  useEffect(() => {
    console.log(messages);
    if (data && !isLoading) {
      addMessage(data?.data?.answer, "bot");
    }
  }, [data, isLoading]);

  return (
    <ChatBotContainer>
      {messages.length === 0 && (
        <ChatBotWrapper>
          <QuestionBox onClick={() => handleButtonClick("오늘의 주식 추천~")}>
            오늘의 주식 추천~
          </QuestionBox>
          <QuestionBox
            onClick={() => handleButtonClick("몇명의 유튜버가 있나요?")}
          >
            몇명의 유튜버가 있나요?
          </QuestionBox>
          <QuestionBox
            onClick={() => handleButtonClick("오늘의 운세를 말해줘")}
          >
            오늘의 운세를 말해줘
          </QuestionBox>
          <QuestionBox
            onClick={() => handleButtonClick("나에게 행운이 되는 말을 해줘")}
          >
            나에게 행운이 되는 말을 해줘
          </QuestionBox>
        </ChatBotWrapper>
      )}
      {messages.length > 0 && (
        <ChatContainer>
          {messages.map((message, index) => (
            <Message key={index} sender={message.sender}>
              {message.text}
            </Message>
          ))}
        </ChatContainer>
      )}
      <InputContainer>
        <input value={inputValue} onChange={handleInputChange} />
        <button onClick={handleInputSubmit}>질문하기</button>
      </InputContainer>
    </ChatBotContainer>
  );
};

export default ChatBotPage;

const ChatBotContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 80vh;
  padding: 20px;
`;

const ChatBotWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  gap: 15px;
  padding-top: 30px;
  width: 30rem;
  height: 30rem;
`;

const QuestionBox = styled.button`
  display: inline-block;
  width: 45%;
  height: 45%;
  border-radius: 20px;
  padding: 10px;
  color: white;
  font-size: 1.5rem;
  background-color: orange;
  cursor: pointer;
`;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 600px;
  padding: 10px;
  background-color: #f1f1f1;
  border-radius: 10px;
  margin-top: 20px;
  overflow-y: auto;
  max-height: 70vh;
`;

const Message = styled.div`
  align-self: ${({ sender }) =>
    sender === "user" ? "flex-end" : "flex-start"};
  background-color: ${({ sender }) =>
    sender === "user" ? "#d1e7dd" : "#ffffff"};
  color: #000;
  padding: 10px;
  margin: 5px;
  border-radius: 10px;
  max-width: 80%;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  max-width: 600px;

  input {
    flex: 1;
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    padding: 10px 20px;
    font-size: 1rem;
    margin-left: 10px;
    border: none;
    border-radius: 5px;
    background-color: orange;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: darkorange;
    }
  }
`;
