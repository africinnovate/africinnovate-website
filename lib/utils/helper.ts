// lib/utils/helper.ts

export const sanitizeInput = (input: string) => {
    // Remove any HTML tags
    const sanitizedInput = input.replace(/<[^>]+>/g, '');
    return sanitizedInput;
  };
  
  export const validateForm = (
    fullName: string,
    email: string,
    phoneNumber: string,
    selectCourse: string,
    yourMessage: string
  ) => {
    const sanitizedFullName = sanitizeInput(fullName);
    const sanitizedEmail = sanitizeInput(email).toLowerCase().trim();
    const sanitizedPhoneNumber = sanitizeInput(phoneNumber).replace(/[^0-9]/g, '');
    const sanitizedYourMessage = sanitizeInput(yourMessage);
  
    // Validation
    const isValid =
      !sanitizedFullName.includes('Full-Name') &&
      sanitizedEmail.includes('@') &&
      sanitizedPhoneNumber.length > 9 &&
      selectCourse !== 'Select course' &&
      sanitizedYourMessage.trim() !== '';
  
    return isValid;
  };
  