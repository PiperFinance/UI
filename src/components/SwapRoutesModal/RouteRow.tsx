import { Disclosure } from "@headlessui/react";
import {
  ArrowsRightLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/20/solid";
import { ChevronRightIcon, ClockIcon } from "@heroicons/react/24/solid";
import { Badge } from "@ui/Badge/Badge";
import { CurrencyIcon } from "@ui/CurrencyIcon";
import Flex from "@ui/Flex/Flex";
import { formatNumber } from "@utils/bignumber";
import type { IRouteInfo } from "@utils/swap/types";

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
  const { amountOut, totalGasFee, estimateTime, amountOutValue, path } = route;

  return (
    <Disclosure defaultOpen={selectedRoute.response === route.response}>
      {({ open }) => (
        <Flex
          direction="column"
          customStyle={`border ${
            selectedRoute.response === route.response
              ? "border-wheat-900 bg-wheat-122"
              : "border-gray-700 hover:border-wheat-900"
          } p-4 rounded-2xl cursor-pointer transition max-h-96`}
          onClick={() => {
            changeRoute(route);
            onDismiss();
          }}
        >
          <Flex justifyContent="between" alignItems="center">
            <Flex alignItems="center">
              <h1 className="font-bold">
                Receive: {formatNumber(amountOut, 6)}{" "}
              </h1>
              <h4 className="text-sm">
                &nbsp; &#8771; &nbsp;${amountOutValue}
              </h4>
            </Flex>

            <Flex width="fit" customStyle="space-x-2">
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
              <Badge>
                <ClockIcon className="h-4 w-4" />
                {estimateTime ? Math.round(estimateTime / 60) + "m" : "?"}
              </Badge>
            </Flex>
            <Disclosure.Button onClick={(e: any) => e.stopPropagation()}>
              <ChevronRightIcon
                className={`ml-3 h-6 w-6 rounded-md p-1 hover:bg-gray-900 ${
                  open ? "rotate-90" : ""
                }`}
              />
            </Disclosure.Button>
          </Flex>
          <Disclosure.Panel>
            <Flex direction="column">
              {path?.map((step) => (
                <Flex
                  key={step.type + step.fromToken.symbol}
                  customStyle="mt-3 space-x-2 bg-gray-900 rounded-full p-1"
                  justifyContent="between"
                  width="half"
                  alignItems="center"
                >
                  <div className="h-9 w-9 rounded-full bg-gray-100">
                    <img
                      src={step.tool?.logo}
                      alt={step.tool?.title}
                      className="rounded-full"
                    />
                  </div>
                  <ChevronDoubleRightIcon className="w-3 text-gray-500" />
                  <Flex
                    width="half"
                    justifyContent="evenly"
                    alignItems="center"
                  >
                    <Flex width="fit">
                      <CurrencyIcon
                        size="lg"
                        src={
                          step.fromToken.logoURI
                            ? step.fromToken.logoURI
                            : "/assets/token-not-found.png"
                        }
                        alt={step.fromToken.name}
                        chainId={step.fromToken.chainId}
                      />
                    </Flex>
                    {step.type === "bridge" ? (
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
                      <ArrowsRightLeftIcon className="w-5 text-gray-500" />
                    )}
                    <div className="h-7 w-7 rounded-full bg-gray-100 ">
                      <CurrencyIcon
                        size="lg"
                        src={
                          step.toToken.logoURI
                            ? step.toToken.logoURI
                            : "/assets/token-not-found.png"
                        }
                        alt={step.toToken.name}
                        chainId={step.toToken.chainId}
                      />
                    </div>
                  </Flex>
                </Flex>
              ))}
            </Flex>
          </Disclosure.Panel>
        </Flex>
      )}
    </Disclosure>
  );
}
