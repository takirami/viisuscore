import { Update, Create, getAllEntries } from "../pages/api/hello";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { PageWrapper } from "../components/Styles";

const Person = ({ number, name }) => {
  return (
    <Voter>
      <Vote>{number}</Vote>
      <Name>{name}</Name>
    </Voter>
  );
};

export default function Home() {
  const [people, setPeople] = useState([]);
  const [score, setScore] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllEntries();
      setPeople(result);
      const scoring =
        result[0].fields.jonas["en-US"] +
        result[1].fields.jonas["en-US"] +
        result[2].fields.jonas["en-US"] +
        result[3].fields.jonas["en-US"];
      setScore(scoring);
    };
    const interval = setInterval(() => fetchData(), 3000);
    return () => clearInterval(interval);
  }, [people]);
  return (
    <PageWrapper>
      <Total>{score}</Total>
      <Grid>
        {people
          .sort((a, b) =>
            a.fields.name["en-US"] > b.fields.name["en-US"]
              ? 1
              : b.fields.name["en-US"] > a.fields.name["en-US"]
              ? -1
              : 0
          )
          .map((person) => {
            console.log(person);
            return (
              <Person
                name={person.fields.name["en-US"]}
                number={person.fields.jonas["en-US"]}
              />
            );
          })}
      </Grid>
    </PageWrapper>
  );
}

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
export const Vote = styled.div`
  font-size: 600px;
  margin-bottom: -150px;
`;
const Name = styled.div`
  font-size: 200px;
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
const Total = styled.div`
  position: absolute;
  color: white;
  opacity: 0.6;
  display: flex;
  width: 100%;
  height: 100%;
  font-size: 400px;
  justify-content: center;
  align-items: center;
`;
