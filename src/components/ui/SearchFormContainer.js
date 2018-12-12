import SearchForm from './SearchForm'
import { connect } from 'react-redux'
import { resetFormValues, handleChange } from '../../duck/actions'

const mapStateToProps = state => ({
  formValues: state.formValues,
  locationOptions: state.locationOptions
})

const mapDispatchToProps = {
  resetFormValues,
  onChange: handleChange
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm)
