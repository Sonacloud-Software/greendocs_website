export type ContactFormData = {
  name: string
  email: string
  message: string
}

export type SendEmailResult =
  | { success: true; id: string }
  | { success: false; error: string }
