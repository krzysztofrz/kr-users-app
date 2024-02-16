import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 25px;
  height: 25px;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 50%;
  border: none;
  color: white;
  display: flex;
  justify-content: center;
  margin-left: 10px;

  svg {
    width: 100%;
    height: 100%;
  }
`;
