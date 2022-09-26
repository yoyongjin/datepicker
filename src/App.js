import React from "react";
import styled from "styled-components";
// import AudioPlay from "./components/AudioPlay";
import DateStartToEnd from "./components/DateStartToEnd";
// import audio from "./;

const App = () => {
  return (
    <AppContainer>
      <SearchForm>
        {/* Date input */}
        <SearchDate>
          <SearchSpan>Date</SearchSpan>
          <DateStartToEnd />
        </SearchDate>

        {/* PhoneNum input */}
        <SearchPhoneNum>
          <SearchSpan>Phone No.</SearchSpan>
          <SearchPhoneNumInput />
        </SearchPhoneNum>

        {/* Memo input */}
        <SearchMemo>
          <SearchSpan searchItem="MEMO">
            #<SearchMemoInput />
          </SearchSpan>
        </SearchMemo>

        {/* Search button */}
        <SearchBtn>Search</SearchBtn>
      </SearchForm>
      {/* <AudioPlay url={audio} /> */}
    </AppContainer>
  );
};

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const SearchForm = styled.form`
  display: flex;
  box-sizing: border-box;
  width: 771px;
  height: 34px;
  padding: 5px 15px;
  align-items: center;
  justify-content: space-evenly;
  gap: 15px;
  background-color: #d4d6d9;
  border-radius: 8px;
  opacity: 1;
`;
const SearchDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 230px;
`;
const SearchSpan = styled.span`
  font: normal normal 600 13px/20px Segoe UI;
  color: #707070;
  white-space: nowrap;
  opacity: 1;
`;
const SearchPhoneNum = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 7px;
  width: 191px;
`;
const SearchPhoneNumInput = styled.input`
  margin-left: 7px;
  box-sizing: border-box;
  width: 122px;
  height: 24px;
  border: 1px solid #707070;
  border-radius: 6px;
`;
const SearchMemo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 7px;
  width: 203px;
`;
const SearchMemoInput = styled.input`
  margin-left: 7px;
  box-sizing: border-box;
  width: 188px;
  height: 24px;
  border: 1px solid #707070;
  border-radius: 6px;
`;
const SearchBtn = styled.button`
  /* margin-left: 15px; */
  padding: 0;
  background: #707070;
  border: none;
  border-radius: 6px;
  opacity: 1;
  width: 74px;
  height: 24px;
  font: normal normal 600 14px Segoe UI;
  color: #fff;

  &:hover {
    cursor: pointer;
  }
`;

export default App;
