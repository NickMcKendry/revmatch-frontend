export const meetupValidation = values => {
  const errors = {}
  const requiredFields = ['title', 'location', 'meetuptype', 'description']
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
  if(values.meetuptype && values.meetuptype.length < 2){
    errors.meetuptype = "Event Type must be at least 2 characters long"
  }
  if(values.description && values.description < 10) {
    errors.description = "Description must be at least 10 characters long"
  }

  return errors
}
