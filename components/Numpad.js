import { getAllEntries, Update } from "../pages/api/hello";
import styled from "styled-components";
import { PageWrapper } from "../components/Styles";

const Numpad = ({ id }) => {
  const reset = async () => {
    const result = await getAllEntries()
    result.map((person) => {
      Update({ id: person.sys.id, number: 0 });
    })
  };
  return (
    <PageWrapper>
    <Wrapper>
      <Grid>
        <Voter onClick={() => Update({ id: id, number: 1 })}>
          <Option>1</Option>
        </Voter>
        <Voter onClick={() => Update({ id: id, number: 2 })}>
          <Option>2</Option>
        </Voter>
        <Voter onClick={() => Update({ id: id, number: 3 })}>
          <Option>3</Option>
        </Voter>
        <Voter onClick={() => Update({ id: id, number: 4 })}>
          <Option>4</Option>
        </Voter>
        <Voter onClick={() => Update({ id: id, number: 5 })}>
          <Option>5</Option>
        </Voter>
        <Voter onClick={() => Update({ id: id, number: 6 })}>
          <Option>6</Option>
        </Voter>
        <Voter onClick={() => Update({ id: id, number: 7 })}>
          <Option>7</Option>
        </Voter>
        <Voter onClick={() => Update({ id: id, number: 8 })}>
          <Option>8</Option>
        </Voter>
        <Voter onClick={() => Update({ id: id, number: 10 })}>
          <Option>10</Option>
        </Voter>
        <Voter onClick={() => Update({ id: id, number: 12 })}>
          <Option>12</Option>
        </Voter>
      </Grid>
        {id === "6cSqelYVdSkA3rXbgDdtRR" && (
          <Reset onClick={() => reset()}>
            <Option>RESET</Option>
          </Reset>
        )}
    </Wrapper>
    </PageWrapper>
  );
};
export default Numpad;

export const Reset = styled.div`
  width: 66%;
  color: white;
  opacity: 0.6;
  border-radius: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto auto 40px;

  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  &:active {
    background-color: white;
    background-opacity: o.5;
    & > div {
      color: gray;
    }
  }
`;
export const Voter = styled.div`
  width: 33%;
  color: white;
  opacity: 0.6;
  border-radius: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  &:active {
    background-color: white;
    background-opacity: o.5;
    & > div {
      color: gray;
    }
  }
`;
const Option = styled.div`
  font-size: 50px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  width: 100%;
  flex-grow: 1;
`;

const Wrapper = styled.div`
display: flex;
flex-direction: column;
  width: 100%;
  height: 100vh;
`
