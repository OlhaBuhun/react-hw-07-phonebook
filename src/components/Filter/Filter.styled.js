import styled from 'styled-components';

export const FilterLabel = styled.label`
  margin-left: 10px; 
  display: flex;  justify-content: space-around;
  align-items: center;
  width: 600px;
  padding: 12px;
  color: #7e8c15;
  font-size: 20px;
  background-color: #c0edf2;
  border: 3px solid #7e8c15;
  border-radius: 4px;
`;

export const FilterInput = styled.input`
  padding: 0px 15px 0px 15px;
  width: 300px;
  height: 40px;
  font-size: 20px;
  border: 1px solid #009dff;
  border-radius: 60px;
  border: 2px solid #7e8c15;

  &:focus {
    background-color: #e4e9f0;
  }
`;
