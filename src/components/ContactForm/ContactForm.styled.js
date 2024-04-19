import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 600px;
  padding: 12px;
  background-color: #c0edf2;
  border: 3px solid #7e8c15;
  border-radius: 4px;
`;
export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  color: #7e8c15;
  font-size: 20px;
`;
export const FormInput = styled.input`
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
  border-radius: 6px;
  border: 2px solid #7e8c15;

  &:focus {
    background-color: #e4e9f0;
  }
`;

export const FormButton = styled.button`
  width: 100px;
  background-color: #f3f6f9;
  border: none;
  border-radius: 20px;
  color: #82909e;
  cursor: pointer;
  padding: 10px;
  text-align: center;
  transition: all 0.8s;
  margin-left: 10px;
  font-size: 10px;
  border: 2px solid #7e8c15;

  &:hover {
    background-color: #00d4ff;
    color: #efff00;
  }
`;
