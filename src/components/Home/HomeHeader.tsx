import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);
  height: 200px;
  text-align: center;
  & h2 {
    font-size: 40px;
    font-weight: bold;
  }
  & p {
    font-size: 20px;
  }
`;

export default function HomeHeader() {
  return (
    <Container>
      <h2>Conduit</h2>
      <p>Share your knowledge</p>
    </Container>
  );
}
