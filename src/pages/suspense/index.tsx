import { Button, Input } from 'antd'
import React, { Suspense, useRef, useState } from 'react'

export default function SuspensePage() {
  const [ show, setShow ] = useState(true)
  return (
    <>
      <h4>
        使用suspense做keep Alive<br />
        切换显示隐藏将保留input状态
      </h4>
      <br />
     <Button onClick={() => setShow(!show)}>显示/隐藏 input</Button>
     <br />
     <br />
     <Detail show={show} />
    </>
   
  )
}

function Detail({ show }){
  return <Suspense >
    <DetailChildren show={show} />
  </Suspense>
}

function DetailChildren({ show }) {
  const resolveRef = useRef<any>();
  if(resolveRef.current){
    resolveRef.current()
    resolveRef.current = undefined
  }
  if(!show){
    throw new Promise((res) => {
      resolveRef.current = res
    })
  }
  return <Input />
}