import { useCoingeckoChart } from '@hooks/useCoingecko';
import Flex from '@ui/Flex/Flex';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import { ChartComponent } from './components/LineChart';

const TokenDetail = () => {
  const [chartDays, setChartDays] = useState('30');

  const router = useRouter();

  const chartData = useCoingeckoChart(String(router.query.symbol), chartDays);

  const formattedTvlData = useMemo(() => {
    if (chartData.data.prices) {
      return chartData.data.prices.map((point: any) => {
        return {
          time: point[0],
          value: point[1],
        };
      });
    }
    return [];
  }, [chartData]);

  return (
    <Flex width={'full'} justifyContent={'center'} alignItems={'center'}>
      <div className="shadow-3xl w-4/5 p-3 rounded-2xl">
        <ChartComponent
          data={formattedTvlData}
          setChartDays={setChartDays}
          chartDays={chartDays}
          symbol={String(router.query.symbol)}
        ></ChartComponent>
      </div>
    </Flex>
  );
};

export default TokenDetail;
