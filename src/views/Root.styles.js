import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 22px;
  height: 22px;
  margin : 0 10px
  background-color: ${({ theme }) => theme.colors.ligthGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
