import styled from 'styled-components';

const Button = styled.button`
  margin: 15px 0;
  padding: 4px 20px;
  font-size: ${({ theme }) => theme.fontSize.m};
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border-radius: 20px;
  border: none;
  font-weight: bold;
  color: $(({theme}) => theme.color.darkGrey;
`;
export default Button;
