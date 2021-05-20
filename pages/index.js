import { Update, Create, getAllEntries } from "../pages/api/hello";
import styled from "styled-components";
import { useState, useEffect } from "react";

const Person = ({ number, name }) => {
  return (
    <Voter>
      <Name>{name}</Name>
      <Vote>{number}</Vote>
    </Voter>
  );
};

export default function Home() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllEntries();
        setPeople(result);
    };
    const interval = setInterval(() => fetchData(), 3000);
    return () => clearInterval(interval);
  }, [people]);

  return (
    <PageWrapper>
      <Grid>
{people.map((person) => {
  console.log(person)
return <Person name={person.fields.name['en-US']} number={person.fields.jonas['en-US']}/>
})}

      </Grid>
    </PageWrapper>
  );
}

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
export const Vote = styled.div`
  font-size: 600px;
`;
const Name = styled.div`
  font-size: 50px;
`;
export const Voter = styled.div`
  width: 50%;
  color: white;
  opacity: 0.6;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const PageWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: blue;
  background: rgb(30, 13, 83);
  background: linear-gradient(
    186deg,
    rgba(30, 13, 83, 1) 0%,
    rgba(116, 67, 89, 1) 100%
  );
`;
