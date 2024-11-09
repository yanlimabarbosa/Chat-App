import { useMutation } from '@tanstack/react-query'

import { SignUpFormData } from '../../pages/signup/validation'
import { api } from '../AxiosInstance'

export function useSignup() {
  return useMutation({
    mutationFn: (values: SignUpFormData) => {
      console.log(values)
      return api.post('api/auth/signup', values)
    },
  })
}
