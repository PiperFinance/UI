import { useRouter } from 'next/router';

const useAddParams = () => {
  const router = useRouter();

  const addParams = (params: Record<string, string>) => {
    const query = {
      ...router.query,
      ...params,
    };
    router.push({
      pathname: router.pathname,
      query,
    });
  };

  return addParams;
};

export default useAddParams;