import useSWRMutation from 'swr/mutation';

export interface ISignUp {
  email: string;
  password: string;
  nickname: string;
}

const useSignIn = () => {
  async function sendRequest(url: string, { arg }: { arg: ISignUp }) {
    const user = {
      user: arg,
    };
    return fetch(url, { method: 'POST', body: JSON.stringify(user) }).then((res) => res.json());
  }

  const { trigger, isMutating, data, error } = useSWRMutation('https://todoo.5xcamp.us/users', sendRequest);

  return {
    trigger,
    isMutating,
    data,
    error,
  };
};

export default useSignIn;
