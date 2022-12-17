import Table from "@components/Table/Table";
import TableBody from "@components/Table/TableBody";
import TableHeader from "@components/Table/TableHeader";
import useTable from "@hooks/useTable";
import { balancesList } from "@store/store";
import { CurrencyInputPanelSkeleton } from "@ui/Skeleton";
import { useAtom } from "jotai";
import { useState } from "react";

export default function TokenTable() {
  const [balances] = useAtom(balancesList);
  // const [page, setPage] = useState<number>(1);
  // const { slice, range } = useTable({
  //   data: Object.keys(balances),
  //   page,
  //   rowsPerPage: 5,
  // });


  // if (!hasMounted) {
  // return <CurrencyInputPanelSkeleton />;
  // }

  return (
    <></>
    // <Table
    //   page={page}
    //   range={range}
    //   totalLength={balances.length}
    //   rowsPerPage={5}
    //   slice={slice}
    //   setPage={setPage}
    // >
    //    <TableHeader titleList={["Token", "Networks", "Price", "Balance", ""]} />
    //   <TableBody slicedList={slice} />
    //  </Table>
  );
}
