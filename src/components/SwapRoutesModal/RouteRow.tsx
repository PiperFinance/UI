import { ClockIcon } from "@heroicons/react/24/solid";
import { destinationToken } from "@store/store";
import { Badge } from "@ui/Badge/Badge";
import Flex from "@ui/Flex/Flex";
import { calculateNumberDecimal, formatNumber } from "@utils/bignumber";
import { IRouteInfo } from "@utils/swap";
import { useAtom } from "jotai";

interface IRoutesRow {
  route: IRouteInfo;
  selectedRoute: IRouteInfo;
  onDismiss: () => void;
  changeRoute: React.Dispatch<React.SetStateAction<IRouteInfo | undefined>>;
}

export default function RouteRow({
  route,
  selectedRoute,
  changeRoute,
  onDismiss,
}: IRoutesRow) {
  const [toToken] = useAtom(destinationToken);

  // const { decimals } = toToken!;

  const { amountOut, totalGasFee, estimateTime, amountOutValue } = route;

  return (
    <Flex
      direction="column"
      customStyle={`border  ${
        selectedRoute.response === route.response
          ? "border-gray-200 "
          : "border-gray-700"
      } p-4 rounded-2xl cursor-pointer hover:border-gray-200 transition`}
      onClick={() => {
        changeRoute(route);
        onDismiss();
      }}
    >
      <Flex justifyContent="between">
        <Flex alignItems="center">
          <h1 className="font-bold">Receive: {formatNumber(amountOut, 3)} </h1>
          <h4 className="text-sm">&nbsp; &#8771; &nbsp;${amountOutValue}</h4>
        </Flex>

        <Flex width="fit" customStyle="space-x-2">
          <>
            {totalGasFee && (
              <Badge>
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  className="h-4 w-4"
                >
                  <g
                    stroke="currentColor"
                    stroke-width="1.4"
                    stroke-linecap="round"
                  >
                    <path d="M6 2.3A2.7 2.7 0 0 0 3.3 5v7A1.7 1.7 0 0 0 5 13.7h4a1.7 1.7 0 0 0 1.7-1.7V5A2.7 2.7 0 0 0 8 2.3H6ZM6 6h2M10.7 5h.6a2 2 0 0 1 2 2v3"></path>
                  </g>
                </svg>
                {formatNumber(totalGasFee, 3)}
              </Badge>
            )}
            {estimateTime && (
              <Badge>
                <ClockIcon className="h-4 w-4" />
                {Math.round(estimateTime / 60)}
              </Badge>
            )}
          </>
        </Flex>
      </Flex>
    </Flex>
  );
}
