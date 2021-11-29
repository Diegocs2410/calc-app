import styled, { css } from "styled-components";

const Button = styled.button`
  font-size: 1.5em;

  outline: none;
  border: none;
  cursor: pointer;
  color: white;
`;
const ButtonC = styled(Button)`
  grid-column: 1 / span 2;
  width: 100%;
`;
const Button0 = styled(Button)`
  grid-column: 1 / span 2;
`;

const Container = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 700px;
`;
const CalcContainer = styled.div`
  display: grid;
  place-items: center;
  min-height: 100vh;
`;
const WrapperCalc = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
  padding: 0.7rem 1.5rem 1.5rem 1.5rem;
  border: 1px solid #ccc;
  gap: 0.55rem;
  background: #333;
  border-radius: 0.5rem;
`;

const Display = styled.input`
  background: #f0f0f0;
  grid-column: 1 / span 4;
  text-align: right;
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
  color: #444;
  margin-bottom: 0.5rem;
`;

function App() {
  return (
    <Container>
      <CalcContainer>
        <h1>Calculator</h1>
        <WrapperCalc>
          <Display type="text"></Display>
          <ButtonC
            className="btn-opt2"
            primary
            id="c"
            onClick={() => console.log("click 1")}
            style={{ width: "100%", height: "100%" }}
          >
            C
          </ButtonC>
          <Button
            className="btn-opt"
            primary
            id="/"
            onClick={() => console.log("click 1")}
            style={{ width: "100%", height: "100%" }}
          >
            /
          </Button>
          <Button
            className="btn-opt"
            primary
            id="*"
            onClick={() => console.log("click 9")}
            style={{ width: "100%", height: "100%" }}
          >
            *
          </Button>
          <Button
            className="button"
            primary
            id="7"
            onClick={() => console.log("click 7")}
          >
            7
          </Button>
          <Button
            className="button"
            primary
            id="8"
            onClick={() => console.log("click 8")}
          >
            8
          </Button>
          <Button
            className="button"
            primary
            id="9"
            onClick={() => console.log("click 9")}
          >
            9
          </Button>
          <Button
            className="btn-opt"
            primary
            id="*"
            onClick={() => console.log("click 9")}
            style={{ width: "100%", height: "100%" }}
          >
            -
          </Button>
          <Button
            className="button"
            primary
            id="4"
            onClick={() => console.log("click 4")}
          >
            4
          </Button>
          <Button
            className="button"
            primary
            id="5"
            onClick={() => console.log("click 5")}
          >
            5
          </Button>
          <Button
            className="button"
            primary
            id="6"
            onClick={() => console.log("click 6")}
          >
            6
          </Button>
          <Button
            className="btn-opt"
            primary
            id="*"
            onClick={() => console.log("click 9")}
            style={{ width: "100%", height: "100%" }}
          >
            +
          </Button>
          <Button
            className="button"
            primary
            id="1"
            onClick={() => console.log("click 1")}
          >
            1
          </Button>
          <Button
            className="button"
            primary
            id="2"
            onClick={() => console.log("click 2")}
          >
            2
          </Button>
          <Button
            className="button"
            primary
            id="3"
            onClick={() => console.log("click 3")}
          >
            3
          </Button>
          <Button
            className="btn-opt"
            primary
            id="equals  "
            onClick={() => console.log("click 9")}
            style={{
              gridRow: "-3/-1",
              gridColumn: "4/5",
              height: "100%",
              width: "100%",
            }}
          >
            =
          </Button>
          <Button0
            className="button"
            primary
            id="0"
            onClick={() => console.log("click 9")}
            style={{ width: "100%" }}
          >
            0
          </Button0>
          <Button
            className="btn-opt3"
            primary
            id="0"
            onClick={() => console.log("click 9")}
            style={{ width: "100%", height: "100%" }}
          >
            .
          </Button>
        </WrapperCalc>
      </CalcContainer>
    </Container>
  );
}

export default App;
