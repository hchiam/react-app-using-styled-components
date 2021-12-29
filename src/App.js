import styled from "styled-components/macro";

function App() {
  return (
    <Wrapper>
      example use of <code>styled-component/macro</code>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  background: maroon;
  color: white;
  margin: 1rem auto;
  max-width: 500px;
  padding: 1rem;
  text-align: center;
`;

export default App;
