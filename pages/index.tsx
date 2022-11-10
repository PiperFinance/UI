import Default from '../components/layout/Default';
import { useSignMessage } from 'wagmi';
import { useEffect } from 'react';
export default function Home() {
  // const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage({
  //   message: 'gm wagmi frens',
  // })

  // useEffect(() =>{
  //   signMessage();
  // }, [])

  // useEffect(() =>{
  //   console.log(data);
  //   console.log(first)
  // }, [data, isSuccess])

  return <Default pageName="Home">{/* <ConnectButton /> */}</Default>;
}
