import Default from '../components/layout/Default';
import { useSignMessage } from 'wagmi';
import { useEffect } from 'react';
export default function Home() {
  return <Default pageName="Home">{/* <ConnectButton /> */}</Default>;
}
