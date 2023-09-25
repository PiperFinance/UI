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
      width: chartContainerRef.current.parentElement.clientWidth - 32,
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
        ticksVisible: true,
        borderVisible: true,
      },
      timeScale: {
        borderVisible: false,
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
          visible: false,
          style: 0,
          width: 2,
          color: '#505050',
          labelVisible: false,
        },
        vertLine: {
          visible: true,
          style: 0,
          width: 2,
          color: '#505050',
          labelVisible: false,
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

    const newSeries = chart.addAreaSeries({
      lineColor,
      topColor: areaTopColor,
      bottomColor: areaBottomColor,
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
            {chartHeader
              ? String(new Date(chartHeader?.time).toDateString())
              : data
              ? String(new Date(data[data.length - 1]?.time).toDateString())
              : ''}
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
