export const getErrorMsg = (error: any) => {
  console.log('[SERVICE-ERROR]')

  if (error.response) {
    console.log({
      url: error.response?.config?.url,
      status: error.response?.status,
      errorMessage: error.message,
      apiErrorMessage: error.ressponse?.data?.errors,
    })

    return
  }

  console.log(error.message)
}
