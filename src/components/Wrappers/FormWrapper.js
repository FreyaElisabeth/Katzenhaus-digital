import styled from 'styled-components'

import { white, darkestprimary } from '../colors'

const FormWrapper = styled.form`
  border: 1px solid ${darkestprimary};
  background: ${white};
  border-radius: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-bottom: 20px;
  padding: 30px;

  section {
    display: grid;
    grid-template-rows: 40px repeat(4, 70px);
    min-width: calc(50vw - 60px);

    &.description {
      grid-template-rows: 40px repeat(3, 70px) repeat(2, 30px) 40px 30px;
    }

    &.behavior {
      grid-template-rows: 40px repeat(5, 30px);
    }

    &.freeTextInfo {
      grid-template-rows: 40px auto;
    }

    &.search {
      grid-template-rows: repeat(3, 70px);
    }
  }

  div.submit {
    grid-column: span 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export default FormWrapper
