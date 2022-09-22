import React, { useState } from "react";
import DatePicker from "react-datepicker";
import styled from "styled-components";

import "react-datepicker/dist/react-datepicker.css";

const SearchDateContainer = styled.div`
  display: flex;
  margin-top: 15px;
`;
// const SearchDateInput = styled.input`
//   margin-left: ${(props) => (props.dateStartEnd === "START" ? "7px" : "3px")};
//   box-sizing: border-box;
//   width: 90px;
//   height: 24px;
//   border: 1px solid #707070;
//   border-radius: 6px;
// `;
const SearchForm = styled.form`
  box-sizing: border-box;
  padding: 5px 15px 5px 0px;
  align-items: center;
  background-color: #d4d6d9;
  display: flex;
  justify-content: space-between;
  width: 771px;
  height: 34px;
  border-radius: 8px;
  opacity: 1;
`;

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const startDateSelectHandler = () => {
    // startDate 골랐을 때 endDate는 startDate 이전이 될 수 없게.
    // startDate 고르면 endDate로 autoFocus되게.
    console.log("startDate Selected");
  };

  return (
    <SearchDateContainer>
      <DatePicker
        selected={startDate}
        onSelect={startDateSelectHandler}
        onChange={(date) => setStartDate(date)}
        customInput={<input />}
      />
      ~
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        customInput={<input />}
      />
    </SearchDateContainer>
  );
};

export default Calendar;
