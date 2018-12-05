import styled from 'styled-components'

import { darkestprimary } from '../colors'

const FormWrapper = styled.form`
  border: 1px solid ${darkestprimary};
  border-radius: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-bottom: 20px;
  padding: 20px;

  section {
    display: grid;
    grid-template-rows: 40px repeat(4, 60px);
    min-width: calc(50vw - 50px);

    &.description {
      grid-template-rows: 40px repeat(3, 60px) repeat(4, 30px);
    }

    &.behavior {
      grid-template-rows: 40px repeat(5, 30px);
    }

    &.freeTextInfo {
      grid-template-rows: 40px auto;
    }

    &.search {
      grid-template-rows: repeat(3, 60px);
    }
  }
`

export default FormWrapper
