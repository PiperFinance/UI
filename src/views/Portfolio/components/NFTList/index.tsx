import Flex from "@ui/Flex/Flex";
import { NftBox } from "./NftBox";

interface INFTList {
  saveSucceeded: boolean;
}

export default function NFTList(props: INFTList) {
  const { saveSucceeded } = props;

  return (
    <Flex direction="column" customStyle="p-2 h-full overflow-y-auto">
      {/* {data.map((transaction: ITransaction) => (
        <TransactionRow {...transaction} />
      ))} */}
      <NftBox />
    </Flex>
  );
}
