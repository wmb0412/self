import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Sheet } from '@leankylin-sheet/core'
import { Workbook, WorkbookInstance } from "@leankylin-sheet/react";
import "@leankylin-sheet/react/dist/index.css"
import mockData from './data';
export default function SheetPage() {
  const ref = useRef<WorkbookInstance>(null)
  const [ data, setData ] = useState<Sheet[]>([ mockData ] as any);
  const onChange = useCallback((d: Sheet[]) => {
    setData(d);
  }, []);
  useEffect(() => {
    if(ref.current){
      // 初始化的时候手动计算一下公式
      ref.current.calculateFormula()
    }
    
  }, [ ])
  const afterCellMouseDown = useCallback((...e) => {
    console.log('点击事件哈哈哈', ...e)
  }, [])
  const beforeCellMouseDown = useCallback((...e) => {
    console.log('zzzz', ...e)
    return true
  }, [])
  return (
    <div className="w-full h-[600px]" onClick={() => console.log('在政治')}>
       <Workbook ref={ref} showToolbar={false} data={data} onChange={onChange} showSheetTabs={false} hooks={{
        afterCellMouseDown,
        beforeCellMouseDown
        // afterSelectionChange: afterCellMouseDown
       }} />
    </div>
  )
}
