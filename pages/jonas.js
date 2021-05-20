import { PageWrapper, Voter } from '../pages/index'
import {Update} from './api/hello'
import styled from 'styled-components'

const Jonas = () => {
const id = '6cSqelYVdSkA3rXbgDdtRR'

    return (
        <PageWrapper>
            <Voter onClick={() => Update({id:id, number:69})}><Option>10</Option></Voter>
        </PageWrapper>
    )

}

export default Jonas

const Option = styled.div`
    font-size: 50px;
`