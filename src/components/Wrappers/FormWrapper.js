import styled from 'styled-components'

import { darkestprimary } from '../colors'

const FormWrapper = styled.form`
  border: 1px solid ${darkestprimary};
  border-radius: 15px;
  display: flex;
  flex-wrap: wrap;

  div {
    padding: 20px 40px 20px 20px;
    display: grid;

    button {
      margin: 1em;
    }
  }
`

export default FormWrapper
