import React, { useState } from 'react';
import { Button, Divider, Radio, RadioChangeEvent } from 'antd';
import { indexandoLetras } from '../funcoesDoSistema';

const RadioQuestoes = ({titulo, corpo, resposta}:{titulo?:string,corpo?:string[], resposta?:string}) => {
  const [value, setValue] = useState();
  const [respostaCerta, setRespostaCerta] = useState(0)
  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const funcaoClick = ()=>{
     if (value === resposta) {
      setRespostaCerta(1)
     }else{
      setRespostaCerta(2)
     }
  }
  return <div>
    <h5 style={{textAlign:"center"}}>{titulo}</h5>
    <Radio.Group onChange={onChange} value={value} style={{display:"flex", flexDirection:"column"}}>
      {
        corpo?.map((elem, key)=>{
          return(
            <Radio value={elem}>{indexandoLetras(key)} {elem}</Radio>
          )
        })
      }
    </Radio.Group>
    
    <div style={{display:"flex", justifyContent:"flex-end", marginTop:10}}>
      <Button onClick={funcaoClick} type="primary">Responder</Button>
    </div>
    {
      respostaCerta === 1 ? <div>
        <div style={{color:"green"}}>Certo!</div>
        <div>{resposta}</div>
      </div>:
      respostaCerta === 2 ? <div>
        <div style={{color:"red"}}>Errado!</div>
        <div>{resposta}</div>
      </div>:
      <div>
      </div>
    }
    <Divider />
  </div>
};

export default RadioQuestoes;