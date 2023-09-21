import type { IToken } from "@store/store";
import Flex from "@ui/Flex/Flex";
import type { IRouteInfo } from "@utils/swap/types";
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
  selectedRoute,
  changeRoute,
}: ISwapRoutesModal) {
  return (
    <Flex
      direction="column"
      customStyle="max-w-2xl bg-gray-800 rounded-2xl p-5 space-y-2 text-gray-300 max-h-[90%] shadow-modal border border-gray-modalBorder"
      overflow="yAuto"
    >
      <ModalHeader title="Select a Route" onClick={onDismiss} />
      {routes.map((route, index) => (
        <RouteRow
          key={route.type + index}
          route={route}
          selectedRoute={selectedRoute}
          changeRoute={changeRoute}
          onDismiss={onDismiss}
        />
      ))}
    </Flex>
  );
}
