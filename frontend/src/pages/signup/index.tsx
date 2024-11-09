import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import { useSignup } from '../../api/mutations/use-signup'
import { GenderCheckbox } from './GenderCheckbox'
import { SignUpFormData, signUpFormSchema } from './validation'

export function SignUp() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpFormSchema),
  })
  const { mutateAsync: signup, isPending } = useSignup()

  const onSubmit: SubmitHandler<SignUpFormData> = (data) => {
    signup(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center min-w-96 mx-auto"
    >
      <div className="w-full p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp <span className="text-blue-300">ChatApp</span>
        </h1>

        <div>
          <label className="label p-2">
            <span className="text-base label-text">Full Name</span>
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full input input-bordered h-10"
            {...register('fullname')}
          />
          {errors.fullName && (
            <span className="text-red-500 text-sm">
              {errors.fullName.message}
            </span>
          )}
        </div>

        <div>
          <label className="label p-2">
            <span className="text-base label-text">Username</span>
          </label>
          <input
            type="text"
            placeholder="johndoe"
            className="w-full input input-bordered h-10"
            {...register('username')}
          />
          {errors.username && (
            <span className="text-red-500 text-sm">
              {errors.username.message}
            </span>
          )}
        </div>

        <div>
          <label className="label p-2">
            <span className="text-base label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full input input-bordered h-10"
            {...register('password')}
          />
          {errors.password && (
            <span className="text-red-500 text-sm">
              {errors.password.message}
            </span>
          )}
        </div>

        <div>
          <label className="label p-2">
            <span className="text-base label-text">Confirm Password</span>
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full input input-bordered h-10"
            {...register('confirmPassword')}
          />
          {errors.confirmPassword && (
            <span className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>

        <Controller
          name="gender"
          control={control}
          render={({ field }) => <GenderCheckbox {...field} />}
        />

        <a
          href=""
          className="text-sm hover:underline hover:text-blue-400 mt-2 inline-block"
        >
          Already have an account?
        </a>

        <div>
          <button
            type="submit"
            className="btn btn-block btn-sm mt-2 border border-slate-700"
            disabled={isPending}
          >
            Sign Up
          </button>
        </div>
      </div>
    </form>
  )
}
