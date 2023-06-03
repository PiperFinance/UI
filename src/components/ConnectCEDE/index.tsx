import { useCedeProvider } from '@hooks/useCede';
import { vaults } from '@store/store';
import { useAtom } from 'jotai';
import Image from 'next/image';
import cedeImg from './cede-store.png';

const ConnectCEDE = () => {
  const [, setVault] = useAtom(vaults);
  const { cedeProvider } = useCedeProvider();

  const handleConnectCEDE = async () => {
    if (!cedeProvider) return;
    try {
      await cedeProvider.request({ method: 'connect' });
      const vaultPreview = await cedeProvider.getVaultPreviews();
      setVault(vaultPreview[0]);
    } catch (e) {
    }
  };

  return (
    <>
      <button
        onClick={() => {
          handleConnectCEDE();
        }}
        className="flex border border-primary-700 rounded-xl text-gray-200 p-3 mx-3 space-x-1 h-fit items-center hover:bg-primary-700 transition-all"
      >
        <Image
          className="mx-1"
          alt="CEDE"
          src={cedeImg}
          width={30}
          height={30}
        />
        Connect to CEDE
      </button>
    </>
  );
};

export default ConnectCEDE;
