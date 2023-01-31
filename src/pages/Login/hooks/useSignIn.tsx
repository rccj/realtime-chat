import useSWRMutation from 'swr/mutation';

export interface ISignIn {
  email: string;
  password: string;
}

const useSignIn = () => {
  async function sendRequest(url: string, { arg }: { arg: ISignIn }) {
    const user = {
      user: arg,
    };
    return fetch(url, { method: 'POST', body: JSON.stringify(user) }).then((res) => res.json());
  }

  const { trigger, isMutating, data, error } = useSWRMutation('https://todoo.5xcamp.us/users/sign_in', sendRequest);

  return {
    trigger,
    isMutating,
    data,
    error,
  };
};

export default useSignIn;
