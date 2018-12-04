import styled from 'styled-components'

import { darkestprimary } from '../colors'

const FormWrapper = styled.form`
  border: 1px solid ${darkestprimary};
  border-radius: 15px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;

  section {
    padding: 20px 40px 20px 20px;
    display: grid;
    grid-template-rows: 2em;
    min-width: calc(50vw - 40px);
  }
`

export default FormWrapper
