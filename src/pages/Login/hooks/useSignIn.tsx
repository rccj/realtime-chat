import useSWRMutation from 'swr/mutation';

export interface ISignIn {
  email: string;
  password: string;
}

const useSignIn = () => {
  async function sendRequest(url: string, { arg }: { arg: ISignIn }) {
    return fetch(url, { method: 'POST', body: JSON.stringify(arg) }).then((res) => res.json());
  }

  const { trigger, isMutating, data, error } = useSWRMutation('api/user/signin', sendRequest);

  return {
    trigger,
    isMutating,
    data,
    error,
  };
};

export default useSignIn;
