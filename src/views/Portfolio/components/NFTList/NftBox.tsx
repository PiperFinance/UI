import ChainIcon from '@components/ChainIcon';
import { Chains } from '@constants/networkList';
import Flex from '@ui/Flex/Flex';
import { handleSliceHashString } from '@utils/sliceHashString';
import type { INft } from './types';

export function NftBox(nft: INft) {
  const { chainId, logoURI, symbol, name, owner, totalSupply, meta } = nft;

  const currentChain = Chains.find((chain) => chain.id === chainId && chain);

  return (
    <Flex
      direction="column"
      justifyContent="between"
      customStyle="rounded-lg border border-gray-800 max-w-[240px] mb-7"
    >
      <div className="relative w-full h-60 rounded-t-lg overflow-hidden">
        <div className="absolute right-0">
          <ChainIcon chainId={currentChain?.id!} />
        </div>
        <span className="bg-primary-900 font-bold text-xs px-4 text-gray-300 rounded-2xl absolute left-2 top-2">
          {/* ERC{detail.type.toString()} */}
          ERC 721
        </span>
        <img
          className="rounded-lg object-cover h-60 w-full"
          src={logoURI}
          alt=""
        />
      </div>
      <div className="px-3 py-2">
        <Flex customStyle="mb-2" alignItems="center" justifyContent="between">
          {' '}
          <h5 className="text-2xl font-bold tracking-tight text-white">
            {symbol}
          </h5>
          {/* <a
            target="_blank"
            rel="noopener noreferrer"
            href={`${
              currentChain?.blockExplorers?.default.url
            }/token/${detail.address!}`}
            className="inline-flex items-center rounded-lg text-center text-sm font-medium text-gray-100"
          >
            <ArrowTopRightOnSquareIcon className="w-5 h-5" />
          </a> */}
        </Flex>

        <h6 className="mb-2 text-sm tracking-tight text-gray-200 w-3/4 truncate">
          <strong>Name</strong>: {name}
        </h6>

        <h6 className="mb-2 text-sm tracking-tight text-gray-200">
          <strong>Wallet:</strong>&nbsp;
          <a
            className=" transition hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            href={`${currentChain?.blockExplorers?.default.url}/address/${owner}`}
          >
            {handleSliceHashString(owner, 10).toLowerCase()}
          </a>
        </h6>
        <h6 className="mb-2 text-sm tracking-tight text-gray-300">
          <strong>Total Supply:</strong> {totalSupply}
        </h6>
        {/* <h6 className="mb-2 text-sm tracking-tight text-gray-300">
          <strong>Balance:</strong> {balance}
        </h6> */}
        <Flex customStyle="mb-5 space-x-1" alignItems="center">
          <h6 className="tracking-tight text-gray-300">
            <strong>Description:</strong>{' '}
          </h6>
          <p className="text-sm font-normal text-gray-400 truncate">
            {meta ? `"${meta}"` : '<No Description>'}
          </p>
        </Flex>
      </div>
    </Flex>
  );
}
