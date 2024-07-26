const sanitizeInput = (input: string) => {
  // Remove any HTML tags
  const sanitizedInput = input.replace(/<[^>]+>/g, '')
  return sanitizedInput
}

export const validateForm = (phoneNumber: string, yourMessage: string) => {
  const sanitizedPhoneNumber = phoneNumber
    ? sanitizeInput(phoneNumber).replace(/[^0-9]/g, '')
    : ''
  const sanitizedYourMessage = sanitizeInput(yourMessage)

  // Validation
  const isValid =
    sanitizedPhoneNumber.length > 9 && sanitizedYourMessage.trim() !== ''

  return isValid
}
