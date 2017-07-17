export const meetupValidation = values => {
  const errors = {}
  const requiredFields = ['title', 'location', 'eventtype', 'description']
  requiredFields.forEach( field => {
    if(!values[field]){
      errors[field] = "Required!"
    }
  })
  if(values.title && values.title.length < 4) {
    errors.title = "Title must be at least 4 characters long"
  }
  if(values.location && values.location.length < 2) {
    errors.location = "Location must be at least 2 characters long"
  }
  if(values.eventtype && values.eventtype.length < 2){
    errors.eventtype = "Event Type must be at least 2 characters long"
  }
  if(values.description && values.description < 10) {
    errors.description = "Description must be at least 10 characters long"
  }

  return errors
}
