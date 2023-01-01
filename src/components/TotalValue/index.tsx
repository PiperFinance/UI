import Flex from "@ui/Flex/Flex";
import { useAtom } from "jotai";

function TotalValue() {

  return (
    <Flex
      direction="column"
      customStyle="bg-gray-122 rounded-2xl p-5 h-fit my-3 text-gray-100 space-y-3"
      width="fit"
    >
      <h4 className="font-semibold text-gray-400">Total Value:</h4>
      {/* <h1 className="text-2xl">${userTotalValue}</h1> */}
    </Flex>
  );
}

export default TotalValue;
