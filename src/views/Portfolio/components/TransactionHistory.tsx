import Flex from "@ui/Flex/Flex";
import Label from "@ui/Label/Label";
import { stringToColor } from "@utils/stringToColor";
import Image from "next/image";

export default function TransactionHistory() {
  const labels = ["swap", "approve", "bridge", "deposit"];

  return (
    <Flex direction="column" customStyle="p-2 h-full overflow-y-auto">
      <Flex
        direction="column"
        customStyle="py-4 border-b border-gray-500 last:border-b-0"
      >
        <Flex justifyContent="between" alignItems="center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://etherscan.io/tx/0x3b3d9f450d12f6b66e98ffe1c97742e3416d1d76d49d9f08a5c4f834024dba72"
            className="w-auto overflow-hidden overflow-ellipsis text-sm hover:text-gray-400 dark:text-gray-300"
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
        <Flex customStyle="mt-2">
          {labels.map((label: string) => (
            <Label bgColor={stringToColor(label)} key={label}>
              {label}
            </Label>
          ))}
        </Flex>
      </Flex>

      <Flex
        direction="column"
        customStyle="py-4 border-b border-gray-500 last:border-b-0"
      >
        <Flex justifyContent="between" alignItems="center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://etherscan.io/tx/0x3b3d9f450d12f6b66e98ffe1c97742e3416d1d76d49d9f08a5c4f834024dba72"
            className="w-auto overflow-hidden overflow-ellipsis text-sm hover:text-gray-400 dark:text-gray-300"
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
        <Flex customStyle="mt-2">
          {labels.map((label: string) => (
            <Label bgColor={stringToColor(label)} key={label}>
              {label}
            </Label>
          ))}
        </Flex>
      </Flex>
      <Flex
        direction="column"
        customStyle="py-4 border-b border-gray-500 last:border-b-0"
      >
        <Flex justifyContent="between" alignItems="center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://etherscan.io/tx/0x3b3d9f450d12f6b66e98ffe1c97742e3416d1d76d49d9f08a5c4f834024dba72"
            className="w-auto overflow-hidden overflow-ellipsis text-sm hover:text-gray-400 dark:text-gray-300"
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
        <Flex customStyle="mt-2">
          {labels.map((label: string) => (
            <Label bgColor={stringToColor(label)} key={label}>
              {label}
            </Label>
          ))}
        </Flex>
      </Flex>
      <Flex
        direction="column"
        customStyle="py-4 border-b border-gray-500 last:border-b-0"
      >
        <Flex justifyContent="between" alignItems="center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://etherscan.io/tx/0x3b3d9f450d12f6b66e98ffe1c97742e3416d1d76d49d9f08a5c4f834024dba72"
            className="w-auto overflow-hidden overflow-ellipsis text-sm hover:text-gray-400 dark:text-gray-300"
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
        <Flex customStyle="mt-2">
          {labels.map((label: string) => (
            <Label bgColor={stringToColor(label)} key={label}>
              {label}
            </Label>
          ))}
        </Flex>
      </Flex>
      <Flex
        direction="column"
        customStyle="py-4 border-b border-gray-500 last:border-b-0"
      >
        <Flex justifyContent="between" alignItems="center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://etherscan.io/tx/0x3b3d9f450d12f6b66e98ffe1c97742e3416d1d76d49d9f08a5c4f834024dba72"
            className="w-auto overflow-hidden overflow-ellipsis text-sm hover:text-gray-400 dark:text-gray-300"
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
        <Flex customStyle="mt-2">
          {labels.map((label: string) => (
            <Label bgColor={stringToColor(label)} key={label}>
              {label}
            </Label>
          ))}
        </Flex>
      </Flex>
      <Flex
        direction="column"
        customStyle="py-4 border-b border-gray-500 last:border-b-0"
      >
        <Flex justifyContent="between" alignItems="center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://etherscan.io/tx/0x3b3d9f450d12f6b66e98ffe1c97742e3416d1d76d49d9f08a5c4f834024dba72"
            className="w-auto overflow-hidden overflow-ellipsis text-sm hover:text-gray-400 dark:text-gray-300"
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
        <Flex customStyle="mt-2">
          {labels.map((label: string) => (
            <Label bgColor={stringToColor(label)} key={label}>
              {label}
            </Label>
          ))}
        </Flex>
      </Flex>
      <Flex
        direction="column"
        customStyle="py-4 border-b border-gray-500 last:border-b-0"
      >
        <Flex justifyContent="between" alignItems="center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://etherscan.io/tx/0x3b3d9f450d12f6b66e98ffe1c97742e3416d1d76d49d9f08a5c4f834024dba72"
            className="w-auto overflow-hidden overflow-ellipsis text-sm hover:text-gray-400 dark:text-gray-300"
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
        <Flex customStyle="mt-2">
          {labels.map((label: string) => (
            <Label bgColor={stringToColor(label)} key={label}>
              {label}
            </Label>
          ))}
        </Flex>
      </Flex>
      <Flex
        direction="column"
        customStyle="py-4 border-b border-gray-500 last:border-b-0"
      >
        <Flex justifyContent="between" alignItems="center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://etherscan.io/tx/0x3b3d9f450d12f6b66e98ffe1c97742e3416d1d76d49d9f08a5c4f834024dba72"
            className="w-auto overflow-hidden overflow-ellipsis text-sm hover:text-gray-400 dark:text-gray-300"
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
        <Flex customStyle="mt-2">
          {labels.map((label: string) => (
            <Label bgColor={stringToColor(label)} key={label}>
              {label}
            </Label>
          ))}
        </Flex>
      </Flex>
      <Flex
        direction="column"
        customStyle="py-4 border-b border-gray-500 last:border-b-0"
      >
        <Flex justifyContent="between" alignItems="center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://etherscan.io/tx/0x3b3d9f450d12f6b66e98ffe1c97742e3416d1d76d49d9f08a5c4f834024dba72"
            className="w-auto overflow-hidden overflow-ellipsis text-sm hover:text-gray-400 dark:text-gray-300"
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
        <Flex customStyle="mt-2">
          {labels.map((label: string) => (
            <Label bgColor={stringToColor(label)} key={label}>
              {label}
            </Label>
          ))}
        </Flex>
      </Flex>
      <Flex
        direction="column"
        customStyle="py-4 border-b border-gray-500 last:border-b-0"
      >
        <Flex justifyContent="between" alignItems="center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://etherscan.io/tx/0x3b3d9f450d12f6b66e98ffe1c97742e3416d1d76d49d9f08a5c4f834024dba72"
            className="w-auto overflow-hidden overflow-ellipsis text-sm hover:text-gray-400 dark:text-gray-300"
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
        <Flex customStyle="mt-2">
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
