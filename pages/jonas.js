import { PageWrapper, Voter, Grid } from '../pages/index'
import {Update} from './api/hello'
import styled from 'styled-components'

const Jonas = () => {
const id = '6cSqelYVdSkA3rXbgDdtRR'

    return (
        <PageWrapper>
<Grid>           
            <Voter onClick={() => Update({id:id, number:5})}><Option>5</Option></Voter>
            <Voter onClick={() => Update({id:id, number:6})}><Option>6</Option></Voter>
            <Voter onClick={() => Update({id:id, number:7})}><Option>7</Option></Voter>
            <Voter onClick={() => Update({id:id, number:8})}><Option>8</Option></Voter>
            <Voter onClick={() => Update({id:id, number:9})}><Option>9</Option></Voter>
            <Voter onClick={() => Update({id:id, number:10})}><Option>10</Option></Voter>
</Grid> 
        </PageWrapper>
    )

}

export default Jonas

const Option = styled.div`
    font-size: 50px;
`
