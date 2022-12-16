import { IToken } from "@store/store";
import { Badge } from "@ui/Badge/Badge";
import Flex from "@ui/Flex/Flex";
import { calculateNumberDecimal, formatNumber } from "@utils/bignumber";
import { IRouteInfo } from "@utils/swap";
import ModalHeader from "../ModalHeader";
import RouteRow from "./RouteRow";

interface ISwapRoutesModal {
  routes: IRouteInfo[];
  onDismiss: () => void;
  destinationToken: IToken;
  selectedRoute: IRouteInfo;
  changeRoute: React.Dispatch<React.SetStateAction<IRouteInfo | undefined>>;
}

export default function SwapRouteModal({
  routes,
  onDismiss,
  destinationToken,
  selectedRoute,
  changeRoute,
}: ISwapRoutesModal) {
  return (
    <Flex
      direction="column"
      customStyle="max-w-2xl bg-gray-800 rounded-2xl p-5 space-y-2 text-gray-300"
    >
      <ModalHeader title="Select a Route" onClick={onDismiss} />
      {routes.map((route) => (
        <RouteRow
          route={route}
          selectedRoute={selectedRoute}
          changeRoute={changeRoute}
          onDismiss={onDismiss}
        />
      ))}
    </Flex>
  );
}
