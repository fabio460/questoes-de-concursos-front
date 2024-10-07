import React from 'react';
import { Flex, Radio } from 'antd';
import { useAppDispatch } from '../redux/hooks';
import { clickSelect } from '../redux/clickSelectQuestoesMateriaRedux';

const options = [
  { label: 'Conteudo', value: 'Conteudo' },
  { label: 'Questões', value: 'Questões' },
];

function SelectQuestaoMateria({lista}:{lista?:any}) {
  const dispatch = useAppDispatch()
  const click = (e:any)=>{
    dispatch(clickSelect(e))
  }
  return <Flex vertical gap="middle">
    {/* <Radio.Group block options={options} defaultValue="SelectQuestaoMateriale" /> */}
    <Radio.Group
      block
      options={options}
      defaultValue="Conteudo"
      optionType="button"
      buttonStyle="solid"
      onChange={e=> click(e.target.value)}
    />
    {/* <Radio.Group block options={options} defaultValue="Pear" optionType="button" /> */}
  </Flex>
};

export default SelectQuestaoMateria;