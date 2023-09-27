import { ColorType, createChart } from 'lightweight-charts';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

const PriceChangeDisplay = ({
  currentPrice,
  selectedPrice,
}: {
  currentPrice: number;
  selectedPrice: number;
}) => {
  if (!currentPrice || !selectedPrice) return <></>;

  const percentageChange =
    ((currentPrice - selectedPrice) / selectedPrice) * 100;

  return (
    <div
      className={`percentage-change ${
        percentageChange < 0 ? 'text-red-500' : 'text-green-500'
      }`}
    >
      {percentageChange.toFixed(2)}%{' '}
    </div>
  );
};

export const ChartComponent = (props: {
  data: any;
  colors?:
    | {
        backgroundColor?: 'black' | undefined;
        lineColor?: '#2962FF' | undefined;
        textColor?: 'white' | undefined;
        areaTopColor?: '#2962FF' | undefined;
        areaBottomColor?: 'rgba(41, 98, 255, 0.28)' | undefined;
      }
    | undefined;

  setChartDays: Dispatch<SetStateAction<string>>;
  chartDays: string;
  symbol: string;
}) => {
  const {
    data,
    colors: {
      backgroundColor = 'transparent',
      lineColor = '#1DBFD5',
      textColor = 'white',
      areaTopColor = 'transparent',
      areaBottomColor = 'rgba(29, 191, 213, 0.4)',
    } = {},
    setChartDays,
    chartDays,
    symbol,
  } = props;

  const [chartHeader, setChartHeader] = useState<{
    value: number;
    time: number;
  }>(data[data.length - 1]);

  const chartContainerRef: any = useRef();

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };

    const chart = createChart(chartContainerRef.current, {
      height: 500,
      width: chartContainerRef.current.parentElement.clientWidth,
      autoSize: true,
      handleScale: false,
      handleScroll: false,
      layout: {
        background: {
          type: ColorType.Solid,
          color: 'transparent',
        },
        textColor: '#f4f4f4',
        fontFamily: 'Inter var',
      },
      rightPriceScale: {
        scaleMargins: {
          top: 0.1,
          bottom: 0.1,
        },
        borderVisible: false,
      },
      timeScale: {
        visible: true,
        secondsVisible: true,
        borderVisible: false,
        tickMarkFormatter: (timestamp: any) => {
          const date = new Date(timestamp);
          const year = date.getFullYear();
          const month = date.toDateString().split(' ')[1];
          const day = date.getDate().toString().padStart(2, '0');
          const hours = date.getHours().toString().padStart(2, '0');
          const minutes = date.getMinutes().toString().padStart(2, '0');

          if (chartDays === 'max') {
            return `${year} ${month}`;
          } else if (chartDays === '30') {
            return `${month} ${day}`;
          } else if (chartDays === '14') {
            return `${month} ${day}`;
          } else if (chartDays === '1') {
            return `${hours}:${minutes}`;
          } else {
            return '';
          }
        },
      },
      watermark: {
        color: 'rgba(0, 0, 0, 0)',
      },
      grid: {
        horzLines: {
          visible: false,
        },
        vertLines: {
          visible: false,
        },
      },
      crosshair: {
        horzLine: {
          visible: true,
          labelVisible: true,
        },
        mode: 1,
        vertLine: {
          visible: true,
          labelVisible: false,
          style: 3,
          width: 1,
          color: '#505050',
        },
      },
    });

    let series = chart.addAreaSeries({
      topColor: 'rgba(19, 68, 193, 0.4)',
      bottomColor: 'rgba(0, 120, 255, 0.0)',
      lineColor: 'rgba(19, 40, 153, 1.0)',
      lineWidth: 3,
    });

    series.setData(data);

    chart.subscribeCrosshairMove((params: any) => {
      setChartHeader(params.seriesData.get(series));
    });

    chart.unsubscribeCrosshairMove((params: any) => {
      setChartHeader(data[data.length - 1]);
    });

    chart.timeScale().fitContent();
    chart.timeScale().scrollToRealTime();

    const newSeries = chart.addAreaSeries({
      lineColor,
      topColor: areaTopColor,
      bottomColor: areaBottomColor,
      priceFormat: {
        type: 'price',
        precision: 4,
        minMove: 0.0001,
      },
    });
    newSeries.setData(data);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);

      chart.remove();
    };
  }, [
    data,
    backgroundColor,
    lineColor,
    textColor,
    areaTopColor,
    areaBottomColor,
  ]);

  return (
    <div className="w-full flex flex-col flex-1">
      <div className="flex flex-row justify-between p-4 mb-4">
        <div className=" flex  flex-col">
          <div className="flex items-center">
            <span className="font-semibold text-lg text-gray-50">
              {symbol.toUpperCase()},
            </span>
            <span className="text-gray-200">
              {chartHeader
                ? chartHeader?.value.toFixed(2)
                : data[data.length - 1]?.value.toFixed(2)}
            </span>
            {PriceChangeDisplay({
              currentPrice: data[data.length - 1]?.value,
              selectedPrice: chartHeader?.value,
            })}
          </div>

          <div className="text-gray-200 text-sm">
            {!chartHeader && data.length === 0
              ? '...'
              : chartHeader
              ? String(new Date(chartHeader?.time).toDateString())
              : String(new Date(data[data.length - 1]?.time).toDateString())}
          </div>
        </div>
        <div className="flex space-x-2">
          <button
            className={` ${
              chartDays === '1' ? 'bg-wheat-500 text-gray-50' : ''
            } w-10 h-7 font-semibold text-sm rounded-md bg-gray-600 text-gray-200`}
            onClick={() => setChartDays('1')}
          >
            1D
          </button>
          <button
            className={` ${
              chartDays === '14' ? 'bg-wheat-500 text-gray-50' : ''
            } w-10 h-7 font-semibold text-sm rounded-md bg-gray-600 text-gray-200`}
            onClick={() => setChartDays('14')}
          >
            2W
          </button>
          <button
            className={` ${
              chartDays === '30' ? 'bg-wheat-500 text-gray-50' : ''
            } w-10 h-7 font-semibold text-sm rounded-md bg-gray-600 text-gray-200`}
            onClick={() => setChartDays('30')}
          >
            1M
          </button>
          <button
            className={` ${
              chartDays === 'max' ? 'bg-wheat-500 text-gray-50' : ''
            } w-10 h-7 font-semibold text-sm rounded-md bg-gray-600 text-gray-200`}
            onClick={() => setChartDays('max')}
          >
            Max
          </button>
        </div>
      </div>

      <div className="max-w-full flex-1" ref={chartContainerRef} />
    </div>
  );
};
