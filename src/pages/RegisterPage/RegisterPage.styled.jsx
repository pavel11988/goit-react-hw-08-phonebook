import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 270px;
  height: 30px;
  margin-bottom: 5px;
`;
export const Input = styled.input`
  height: 25px;
  width: 180px;
  font-size: 17px;
`;
export const Button = styled.button`
  margin-top: 10px;
  width: 270px;
  height: 40px;
  background-color: #1a1acf;
  border-radius: 10px;
  border-color: transparent;
  font-size: 17px;
  font-weight: 700;
  color: white;
  &:hover {
    background-color: #0d0d9f;
    color: #bbbbbb;
    cursor: pointer;
  }
`;
