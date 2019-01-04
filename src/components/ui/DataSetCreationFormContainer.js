import DataSetCreationForm from './DataSetCreationForm'
import { connect } from 'react-redux'
import { resetFormValues, handleChange, createNewCat } from '../../duck/actions'

const mapStateToProps = state => ({
  formValues: state.formValues,
  locationOptions: state.locationOptions
})

const mapDispatchToProps = {
  resetFormValues,
  onChange: handleChange,
  createNewCat
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataSetCreationForm)
