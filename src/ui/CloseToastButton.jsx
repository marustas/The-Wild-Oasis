import { styled } from "styled-components";

const StyledCloseToastButton = styled.button`
  background-color: var(--color-grey-0);
  color: var(--color-grey-700);
  border: none;
  border-radius: 0.2rem;
  &:hover {
    background-color: var(--color-grey-100);
  }
  padding: 0.2rem 0 0.2rem 0.2rem;
  margin-right: 0;
  height: 100%;
`;

const CloseToastButton = ({ children, onClick }) => {
  return (
    <StyledCloseToastButton onClick={onClick}>
      {children}
    </StyledCloseToastButton>
  );
};

export default CloseToastButton;
