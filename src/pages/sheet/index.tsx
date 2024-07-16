import { useEffect, useRef, useState } from 'react';
import { Sheet, api } from '@leankylin-sheet/core';
import { omit } from 'lodash-es';
import { Workbook, WorkbookInstance } from '@leankylin-sheet/react';
import '@leankylin-sheet/react/dist/index.css';
import { getSheetByIdApi, createSheet } from '@/api/sheet';
import { useMemoizedFn, useRequest } from 'ahooks';
export default function SheetPage() {
  const ref = useRef<WorkbookInstance>(null);
  const [ data, setData ] = useState<Sheet[]>([ {} ] as any);
  const { loading } = useRequest(() => getSheetByIdApi(1), {
    onSuccess(res) {
      setData(res.context ?? [ {} ]);
    },
  });
  const onChange = useMemoizedFn((d: Sheet[]) => {
    createSheet({
      id: 1,
      context: d.map((item) => ({
        ...omit(item, 'data'),
        celldata: api.dataToCelldata(item.data),
      })),
    });
  });
  useEffect(() => {
    if (ref.current) {
      ref.current.calculateFormula();
    }
  }, []);
  if (loading) {
    return null;
  }
  return (
    <div className="w-full h-[600px]" onClick={() => console.log('在政治')}>
      <Workbook
        ref={ref}
        data={data}
        onChange={onChange}
      />
    </div>
  );
}
