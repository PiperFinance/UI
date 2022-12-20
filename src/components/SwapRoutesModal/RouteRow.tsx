import {
  ArrowPathIcon,
  ArrowRightIcon,
  ArrowsRightLeftIcon,
  ArrowUturnUpIcon,
} from "@heroicons/react/20/solid";
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

  const { amountOut, totalGasFee, estimateTime, amountOutValue, path } = route;

  return (
    <Flex
      direction="column"
      customStyle={`border  ${
        selectedRoute.response === route.response
          ? "border-gray-200 "
          : "border-gray-700"
      } p-4 rounded-2xl cursor-pointer hover:border-gray-200 transition max-h-96`}
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
      <Flex customStyle="flex-wrap space-x-3">
        {path?.map((step) => (
          <Flex
            customStyle="mt-3 space-x-2 bg-gray-900 rounded-full p-1"
            justifyContent="between"
            width={30}
            alignItems="center"
          >
            <div className="h-10 w-10 rounded-full bg-gray-100">
              <img
                src={step.tool.logo}
                alt={step.tool.title}
                className="rounded-full"
              />
            </div>
            <Flex width={66} justifyContent="between" alignItems="center">
              <div className="h-8 w-8 rounded-full bg-gray-100 ">
                <img src={step.fromToken.logoURI} alt={step.fromToken.name} className="rounded-full"/>
              </div>
              {step.type === "cross" ? (
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM13.96 7.62c.34-.18.47-.61.29-.95C12.97 4.28 10.57 2.8 8 2.8 4.47 2.8 1.53 5.53.92 9.12A1.498 1.498 0 0 0 1.5 12c.83 0 1.5-.67 1.5-1.5 0-.53-.27-.99-.68-1.26C2.86 6.37 5.2 4.2 8 4.2c2.06 0 3.98 1.2 5.01 3.13.18.34.61.47.95.29Z"
                    fill="currentColor"
                    fill-opacity="0.4"
                  ></path>
                </svg>
              ) : (
                // <ArrowsRightLeftIcon className="w-5 text-gray-500" />
                <ArrowsRightLeftIcon className="w-5 text-gray-500" />
              )}
              <div className="h-8 w-8 rounded-full bg-gray-100 ">
                <img src={step.toToken.logoURI} alt={step.toToken.name} className="rounded-full"/>
              </div>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
