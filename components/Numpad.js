import { Grid } from "../pages/index";
import { Update } from "../pages/api/hello";
import styled from "styled-components";
import { PageWrapper } from "../components/Styles";

const Numpad = (id) => {
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
      </Grid>
    </PageWrapper>
  );
};
export default Numpad;

export const Voter = styled.div`
  width: 33%;
  color: white;
  opacity: 0.6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Option = styled.div`
  font-size: 50px;
`;
