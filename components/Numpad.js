import { Grid } from "../pages/index";
import { Update } from "../pages/api/hello";
import styled from "styled-components";
import { PageWrapper } from "../components/Styles";

const Numpad = ({ id }) => {
  const reset = () => {
    Update({ id: "1Hi4lNBNSB6s8g3cOi36Fh", number: 0 });
    Update({ id: "36LqEpjIOzb4fF9qblkjj5", number: 0 });
    Update({ id: "6cSqelYVdSkA3rXbgDdtRR", number: 0 });
    Update({ id: "63htFZ0hwqHg9It66XWX6a", number: 0 });
  };
  return (
    <PageWrapper>
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
        {id === "6cSqelYVdSkA3rXbgDdtRR" && (
          <Reset onClick={() => reset()}>
            <Option>RESET</Option>
          </Reset>
        )}
      </Grid>
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
