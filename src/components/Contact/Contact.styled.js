import styled from 'styled-components';

export const ContactItem = styled.li`
  background-color: #ffffff;
  border: 3px solid #7e8c15;
  padding: 5px;
  border-radius: 6px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  color: #7e8c15;
`;

export const ContactDelitButton = styled.button`
  width: 80px;
  background-color: #f3f6f9;
  border: none;
  border-radius: 20px;
  border: 2px solid #7e8c15;
  color: #7e8c15;
  cursor: pointer;
  padding: 10px;
  text-align: center;
  font: inherit;
  transition: transform 250vs linear;
  margin: 0 auto 0;

  &:hover {
    background-color: red;
    color: #efff00;
    transform: scale(1, 1);
  }
`;
