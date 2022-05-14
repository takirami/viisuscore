import { Update, Create, getAllEntries } from "../pages/api/hello";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { PageWrapper } from "../components/Styles";

const Person = ({ number, name }) => {
  return (
    <Voter>
      <Vote style={{ opacity: number === 0 ? 0 : 1 }}>{number}</Vote>
    </Voter>
  );
};

export default function Home() {
  const [people, setPeople] = useState([]);
  const [score, setScore] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllEntries();
      const filtered = result.filter((person) => {
        return person.fields.jonas["en-US"] > 0
      })
      setPeople(filtered);
      const total = filtered.reduce((prev, person) => {
        const added = prev + person.fields.jonas["en-US"]
        return added
      }, 0)
      const scoring = Math.round(total / filtered.length)
      setScore(scoring);
    };
    const interval = setInterval(() => fetchData(), 3000);
    return () => clearInterval(interval);
  }, [people]);
  if (score) {
    return (
      <PageWrapper>
        <Grid>
          <Votes>
      
            {people.map((person) => {
              return (
                <Person
                  name={person.fields.name["en-US"]}
                  number={person.fields.jonas["en-US"]}
                />
              );
            })}
          </Votes>
          <Total style={{opacity: score === 0 ? 0 : "0.6"}}>{score}</Total>
        </Grid>
      </PageWrapper>
    );
  }
  return (
    <PageWrapper> 
      <VoteNow>
        Vote Now  
      </VoteNow>
    </PageWrapper>
  )
}

const VoteNow = styled.div`
    font-size: 10vw;
    display:flex;
    color: white;
    opacity: 0.6;
    text-transform: uppercase;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    width: 100%
`
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  flex-wrap: wrap;
  width: 100%;
`;
export const Vote = styled.div`
`;
export const Voter = styled.div`
  color: white;
  opacity: 0.6;
  font-size: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center
`;
const Total = styled.div`
  color: white;
  opacity: 0.6;
  display: flex;
  font-size: 40vw;
  justify-content: center;
  align-items: center;
`;
const Votes = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 160px;
      align-items: center;
`
