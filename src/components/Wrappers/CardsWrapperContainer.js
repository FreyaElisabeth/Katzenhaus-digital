import CardsWrapper from './CardsWrapper'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  dataSets: state.dataSets,
  formValues: state.formValues
})

export default connect(mapStateToProps)(CardsWrapper)
