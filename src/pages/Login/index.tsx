import useSignIn, { ISignIn } from '@/pages/Login/hooks/useSignIn';
import useSignUp, { ISignUp } from '@/pages/Login/hooks/useSignUp';
import { useForm } from 'react-hook-form';
import Button from '@/components/Button';

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ISignUp>();

  const onSubmit = (data: ISignUp) => console.log(data);

  const { trigger: signUpTrigger } = useSignUp();
  const { trigger: signInTrigger } = useSignIn();

  const signUp = () => {
    signUpTrigger({
      email: watch('email'),
      password: watch('password'),
      nickname: watch('email'),
    });
  };

  const signIn = () => {
    signInTrigger({
      email: watch('email'),
      password: watch('password'),
    });
  };

  // TODO: 表格錯誤驗證

  return (
    <div className="flex min-h-screen flex-col justify-center bg-gray-100 sm:py-12">
      <div className="xs:p-0 mx-auto p-10 md:w-full md:max-w-md">
        <h1 className="mb-5 text-center text-2xl font-bold">Your Logo</h1>
        <div className="w-full divide-y divide-gray-200 rounded-lg bg-white shadow">
          <div className="px-5 py-7">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="e-mail" className="block pb-1 text-sm font-semibold text-gray-600">
                E-mail
              </label>
              <input
                {...register('email', { required: true })}
                id="e-mail"
                type="text"
                className="mt-1 mb-5 w-full rounded-lg border px-3 py-2 text-sm"
              />
              <label id="password" htmlFor="password" className="block pb-1 text-sm font-semibold text-gray-600">
                Password
              </label>
              <input
                {...register('password', { required: true })}
                id="password"
                type="password"
                className="mt-1 mb-5 w-full rounded-lg border px-3 py-2 text-sm"
              />
              <Button type="primary" onClick={signIn}>
                <span className="mr-2">Login</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="inline-block h-4 w-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </form>
          </div>
          <div className="p-5">
            <div className="grid grid-cols-3 gap-1">
              <Button onClick={signUp} type="default">
                SignUp
              </Button>
            </div>
          </div>
        </div>
        <div className="py-5">
          <div className="grid grid-cols-2 gap-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
