import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  background-color: orange;
  padding: 20px;
`;

function App() {
  return (
    <>
      <StyledApp>
        <Heading as="h1">The Wild Oasis</Heading>
        <Button>Check in</Button>
        <Button>Check out</Button>
        <Input type="number" placeholder="Number of guests"></Input>
      </StyledApp>
      <GlobalStyles />
    </>
  );
}

export default App;
