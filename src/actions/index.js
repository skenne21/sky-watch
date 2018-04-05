export const addCompanyBio = (bio) => ({
  type: 'ADD_COMPANY_BIO',
  bio
})

export const companyError = (message) => {
  type: 'ADD_ERROR_BIO',
  message
}