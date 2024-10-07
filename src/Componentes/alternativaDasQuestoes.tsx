import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Button, Divider, Input, Radio, Space } from 'antd';
import { indexandoLetras } from '../funcoesDoSistema';

function AlternativaDasQuestoes({titulo, pergunta, resposta, alternativas}:{titulo?:string, pergunta?:string,resposta?:string,alternativas?:string[]}){
  const [value, setValue] = useState('');
  const [Key, setKey] = useState<string>()
  const [respondido, setRespondido] = useState(false)
  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
    setRespondido(false)
    setKey(e.target.id)
  };
  const responder = ()=>{
    if (value !== '') {      
        setRespondido(true)
    }
  }
  return (
    <div>
        <h4>{titulo}</h4>
        <Radio.Group onChange={onChange} value={value}>
            <Space direction="vertical">
                {
                    alternativas?.map((e,key)=>{
                        return(
                            <Radio id={key.toString()} value={e}>{indexandoLetras(key)} {e}</Radio>
                        )
                    })
                }
            </Space>
        </Radio.Group>
        <div></div>
        <div style={{display:"flex"}}>
            <Button type="primary" onClick={responder} style={{ marginTop: 16, marginRight:20 }}>
                Responder
            </Button>
            {
                respondido ?
                resposta === value ?
                  <div><span style={{color:"green"}}>Certo!, </span>{resposta}</div>:
                  <div><span style={{color:"red"}}>Errado!, </span> a resposta certa é: {resposta}</div>
                  : <div></div>
            }
        </div>
        <Divider/>

    </div>
  );
};

export default AlternativaDasQuestoes;