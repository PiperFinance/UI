import { Container } from '@ui/Container/Container';
import Flex from '@ui/Flex/Flex';
import Label from '@ui/Label/Label';
import { stringToColor } from '@utils/stringToColor';
import Image from 'next/image';

export default function List() {
  const labels = ['swap', 'approve', 'bridge', 'deposit'];

  return (
    <Flex
      direction="flex-col"
      style="p-2"
    >
      <Flex
        direction="flex-col"
        style="py-4 border-b border-gray-500 last:border-b-0"
      >
        <Flex position="justify-between items-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://etherscan.io/tx/0x3b3d9f450d12f6b66e98ffe1c97742e3416d1d76d49d9f08a5c4f834024dba72"
            className="w-4/5 overflow-ellipsis overflow-hidden dark:text-gray-300 text-sm hover:text-gray-400"
          >
            0x3b3d9f450d12f6b66e98ffe1c97742e3416d1d76d49d9f08a5c4f834024dba72
          </a>
          <Image
            src="https://token.metaswap.codefi.network/assets/nativeCurrencyLogos/binanceCoin.svg"
            alt="icon"
            width={30}
            height={30}
          />
        </Flex>
        <Flex style="mt-2">
          {labels.map((label: string) => (
            <Label bgColor={stringToColor(label)} key={label}>
              {label}
            </Label>
          ))}
        </Flex>
      </Flex>

      <Flex
        direction="flex-col"
        style="py-4 border-b border-gray-500 last:border-b-0"
      >
        <Flex position="justify-between items-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://etherscan.io/tx/0x3b3d9f450d12f6b66e98ffe1c97742e3416d1d76d49d9f08a5c4f834024dba72"
            className="w-4/5 overflow-ellipsis overflow-hidden dark:text-gray-300 text-sm hover:text-gray-400"
          >
            0x3b3d9f450d12f6b66e98ffe1c97742e3416d1d76d49d9f08a5c4f834024dba72
          </a>
          <Image
            src="https://token.metaswap.codefi.network/assets/nativeCurrencyLogos/binanceCoin.svg"
            alt="icon"
            width={30}
            height={30}
          />
        </Flex>
        <Flex style="mt-2">
          {labels.map((label: string) => (
            <Label bgColor={stringToColor(label)} key={label}>
              {label}
            </Label>
          ))}
        </Flex>
      </Flex>
      <Flex
        direction="flex-col"
        style="py-4 border-b border-gray-500 last:border-b-0"
      >
        <Flex position="justify-between items-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://etherscan.io/tx/0x3b3d9f450d12f6b66e98ffe1c97742e3416d1d76d49d9f08a5c4f834024dba72"
            className="w-4/5 overflow-ellipsis overflow-hidden dark:text-gray-300 text-sm hover:text-gray-400"
          >
            0x3b3d9f450d12f6b66e98ffe1c97742e3416d1d76d49d9f08a5c4f834024dba72
          </a>
          <Image
            src="https://token.metaswap.codefi.network/assets/nativeCurrencyLogos/binanceCoin.svg"
            alt="icon"
            width={30}
            height={30}
          />
        </Flex>
        <Flex style="mt-2">
          {labels.map((label: string) => (
            <Label bgColor={stringToColor(label)} key={label}>
              {label}
            </Label>
          ))}
        </Flex>
      </Flex>
      <Flex
        direction="flex-col"
        style="py-4 border-b border-gray-500 last:border-b-0"
      >
        <Flex position="justify-between items-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://etherscan.io/tx/0x3b3d9f450d12f6b66e98ffe1c97742e3416d1d76d49d9f08a5c4f834024dba72"
            className="w-4/5 overflow-ellipsis overflow-hidden dark:text-gray-300 text-sm hover:text-gray-400"
          >
            0x3b3d9f450d12f6b66e98ffe1c97742e3416d1d76d49d9f08a5c4f834024dba72
          </a>
          <Image
            src="https://token.metaswap.codefi.network/assets/nativeCurrencyLogos/binanceCoin.svg"
            alt="icon"
            width={30}
            height={30}
          />
        </Flex>
        <Flex style="mt-2">
          {labels.map((label: string) => (
            <Label bgColor={stringToColor(label)} key={label}>
              {label}
            </Label>
          ))}
        </Flex>
      </Flex>
      <Flex
        direction="flex-col"
        style="py-4 border-b border-gray-500 last:border-b-0"
      >
        <Flex position="justify-between items-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://etherscan.io/tx/0x3b3d9f450d12f6b66e98ffe1c97742e3416d1d76d49d9f08a5c4f834024dba72"
            className="w-4/5 overflow-ellipsis overflow-hidden dark:text-gray-300 text-sm hover:text-gray-400"
          >
            0x3b3d9f450d12f6b66e98ffe1c97742e3416d1d76d49d9f08a5c4f834024dba72
          </a>
          <Image
            src="https://token.metaswap.codefi.network/assets/nativeCurrencyLogos/binanceCoin.svg"
            alt="icon"
            width={30}
            height={30}
          />
        </Flex>
        <Flex style="mt-2">
          {labels.map((label: string) => (
            <Label bgColor={stringToColor(label)} key={label}>
              {label}
            </Label>
          ))}
        </Flex>
      </Flex>
      <Flex
        direction="flex-col"
        style="py-4 border-b border-gray-500 last:border-b-0"
      >
        <Flex position="justify-between items-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://etherscan.io/tx/0x3b3d9f450d12f6b66e98ffe1c97742e3416d1d76d49d9f08a5c4f834024dba72"
            className="w-4/5 overflow-ellipsis overflow-hidden dark:text-gray-300 text-sm hover:text-gray-400"
          >
            0x3b3d9f450d12f6b66e98ffe1c97742e3416d1d76d49d9f08a5c4f834024dba72
          </a>
          <Image
            src="https://token.metaswap.codefi.network/assets/nativeCurrencyLogos/binanceCoin.svg"
            alt="icon"
            width={30}
            height={30}
          />
        </Flex>
        <Flex style="mt-2">
          {labels.map((label: string) => (
            <Label bgColor={stringToColor(label)} key={label}>
              {label}
            </Label>
          ))}
        </Flex>
      </Flex>
      <Flex
        direction="flex-col"
        style="py-4 border-b border-gray-500 last:border-b-0"
      >
        <Flex position="justify-between items-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://etherscan.io/tx/0x3b3d9f450d12f6b66e98ffe1c97742e3416d1d76d49d9f08a5c4f834024dba72"
            className="w-4/5 overflow-ellipsis overflow-hidden dark:text-gray-300 text-sm hover:text-gray-400"
          >
            0x3b3d9f450d12f6b66e98ffe1c97742e3416d1d76d49d9f08a5c4f834024dba72
          </a>
          <Image
            src="https://token.metaswap.codefi.network/assets/nativeCurrencyLogos/binanceCoin.svg"
            alt="icon"
            width={30}
            height={30}
          />
        </Flex>
        <Flex style="mt-2">
          {labels.map((label: string) => (
            <Label bgColor={stringToColor(label)} key={label}>
              {label}
            </Label>
          ))}
        </Flex>
      </Flex>
      <Flex
        direction="flex-col"
        style="py-4 border-b border-gray-500 last:border-b-0"
      >
        <Flex position="justify-between items-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://etherscan.io/tx/0x3b3d9f450d12f6b66e98ffe1c97742e3416d1d76d49d9f08a5c4f834024dba72"
            className="w-4/5 overflow-ellipsis overflow-hidden dark:text-gray-300 text-sm hover:text-gray-400"
          >
            0x3b3d9f450d12f6b66e98ffe1c97742e3416d1d76d49d9f08a5c4f834024dba72
          </a>
          <Image
            src="https://token.metaswap.codefi.network/assets/nativeCurrencyLogos/binanceCoin.svg"
            alt="icon"
            width={30}
            height={30}
          />
        </Flex>
        <Flex style="mt-2">
          {labels.map((label: string) => (
            <Label bgColor={stringToColor(label)} key={label}>
              {label}
            </Label>
          ))}
        </Flex>
      </Flex>
      <Flex
        direction="flex-col"
        style="py-4 border-b border-gray-500 last:border-b-0"
      >
        <Flex position="justify-between items-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://etherscan.io/tx/0x3b3d9f450d12f6b66e98ffe1c97742e3416d1d76d49d9f08a5c4f834024dba72"
            className="w-4/5 overflow-ellipsis overflow-hidden dark:text-gray-300 text-sm hover:text-gray-400"
          >
            0x3b3d9f450d12f6b66e98ffe1c97742e3416d1d76d49d9f08a5c4f834024dba72
          </a>
          <Image
            src="https://token.metaswap.codefi.network/assets/nativeCurrencyLogos/binanceCoin.svg"
            alt="icon"
            width={30}
            height={30}
          />
        </Flex>
        <Flex style="mt-2">
          {labels.map((label: string) => (
            <Label bgColor={stringToColor(label)} key={label}>
              {label}
            </Label>
          ))}
        </Flex>
      </Flex>
      <Flex
        direction="flex-col"
        style="py-4 border-b border-gray-500 last:border-b-0"
      >
        <Flex position="justify-between items-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://etherscan.io/tx/0x3b3d9f450d12f6b66e98ffe1c97742e3416d1d76d49d9f08a5c4f834024dba72"
            className="w-4/5 overflow-ellipsis overflow-hidden dark:text-gray-300 text-sm hover:text-gray-400"
          >
            0x3b3d9f450d12f6b66e98ffe1c97742e3416d1d76d49d9f08a5c4f834024dba72
          </a>
          <Image
            src="https://token.metaswap.codefi.network/assets/nativeCurrencyLogos/binanceCoin.svg"
            alt="icon"
            width={30}
            height={30}
          />
        </Flex>
        <Flex style="mt-2">
          {labels.map((label: string) => (
            <Label bgColor={stringToColor(label)} key={label}>
              {label}
            </Label>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
