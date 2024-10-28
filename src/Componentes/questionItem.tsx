import React, { ReactNode, useState } from 'react'
import { Avatar, Card, Flex, Switch } from 'antd';
import { questionsTypes } from '../types';
import type { RadioChangeEvent } from 'antd';
import { Input, Radio, Space } from 'antd';

export default function QuestionItem({loading,actions, question}:{loading:boolean,actions:ReactNode[], question?:questionsTypes}) {
  const [resp, setResp] = useState(null)  
  return (
    <Card loading={loading} actions={actions} style={{width:"100%" }}>
    <Card.Meta
      avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
      title={question?.titulo}
    
      description={
        <div>
            <div>{question?.pergunta}</div>
            <Alternative alternativa={question?.alternativas} setResp={setResp}/>
            {
                resp !== null ? 
                  resp === question?.resposta ? 
                  <div style={{color:"green"}}>certo!</div>:
                  <div style={{color:"red"}}>errado!</div>
                  :
                  <div></div>
            }
        </div>
      }
    />
  </Card>
  )
}


function Alternative({alternativa, setResp}:{setResp:any ,alternativa?:string[]}) {
    const [value, setValue] = useState(-1);
    const onChange = (e: any) => {
      setResp(e.target.id);
      setValue(e.target.value);
    };
    return(
        <Radio.Group onChange={onChange} value={value}>
        <Space direction="vertical">
          {
              alternativa?.map((elem, key)=>{
                  return(
                    <Radio value={key} id={elem} key={key}>{elem}</Radio>
                )
            })
          }
        </Space>
      </Radio.Group>
    )
}
