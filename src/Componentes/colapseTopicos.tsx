import React, { useState } from 'react';
import { Collapse, Divider, Typography } from 'antd';
import RadioQuestoes from './radiosQuestoes';
import Materia from './materias';
import { lista } from './lista';



const ColapseTopicos: React.FC = () => {
    const [expanded, setExpanded] = useState(false);
    const [rows] = useState(2);

  return <>
    {
        lista.map((elem, key)=>{
            return(
                <Collapse
                  key={key}
                  size="small"
                  style={{marginBottom:20}}
                  items={[{ key: '', label: elem.titulo, children: <p>
                    <Materia materias={elem.materia}/>
                    <h4 style={{textAlign:"center"}}>Questões</h4>
                    <Typography.Paragraph
                        ellipsis={{
                        rows,
                        expandable: 'collapsible',
                        expanded,
                        onExpand: (_, info) => setExpanded(info.expanded),
                        symbol:((expanded: boolean) => {
                                if (expanded) {
                                    return "Menos questões"
                                }else{
                                    return "Mais questões"
                                }
                            })	    
                        }}
                    >
                        
                        {
                            elem.questao.map((item,k)=>{
                                return(
                                    <RadioQuestoes titulo={item.titulo} corpo={item.corpo} resposta={item.resposta}/>
                                )
                            })
                        }
                    </Typography.Paragraph>
                  </p> }]}
                />
            )
        })
    }
    <Divider orientation="left"></Divider>
  </>
};

export default ColapseTopicos;