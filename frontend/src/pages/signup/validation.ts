import { z } from 'zod'

export const signUpFormSchema = z
  .object({
    fullname: z.string().min(1, { message: 'Full name is required' }),
    username: z
      .string()
      .min(3, { message: 'Username must be at least 3 characters long' }),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters long' }),
    confirmPassword: z.string().min(8, {
      message: 'Confirm password must be at least 8 characters long',
    }),
    gender: z.enum(['male', 'female'], {
      message: 'Please select a valid gender',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export type SignUpFormData = z.infer<typeof signUpFormSchema>
