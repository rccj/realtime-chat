import useSignIn, { ISignIn } from '@/pages/Login/hooks/useSignIn';
import useSignUp, { ISignUp } from '@/pages/Login/hooks/useSignUp';
import { useForm } from 'react-hook-form';

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
              {/* <button
                type="button"
                className="w-full rounded-lg border border-gray-200 py-2.5 text-center text-sm font-normal text-gray-500 shadow-sm transition duration-200 hover:shadow-md"
              >
                Google
              </button> */}
            </div>
          </div>
          {/* <div className="py-5">
            <div className="grid grid-cols-2 gap-1">
              <div className="whitespace-nowrap text-center sm:text-left">
                <button className="mx-5 cursor-pointer rounded-lg px-5 py-4 text-sm font-normal text-gray-500 ring-inset transition duration-200 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="inline-block h-4 w-4 align-text-top"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="ml-1">Forgot Password</span>
                </button>
              </div>
              <div className="whitespace-nowrap text-center sm:text-right">
                <button className="mx-5 cursor-pointer rounded-lg px-5 py-4 text-sm font-normal text-gray-500 ring-inset transition duration-200 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="inline-block h-4 w-4 align-text-bottom	"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <span className="ml-1">Help</span>
                </button>
              </div>
            </div>
          </div> */}
        </div>
        <div className="py-5">
          <div className="grid grid-cols-2 gap-1">
            {/* <div className="whitespace-nowrap text-center sm:text-left">
              <button className="mx-5 cursor-pointer rounded-lg px-5 py-4 text-sm font-normal text-gray-500 ring-inset transition duration-200 hover:bg-gray-200 focus:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="inline-block h-4 w-4 align-text-top"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="ml-1">Back to your-app.com</span>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
