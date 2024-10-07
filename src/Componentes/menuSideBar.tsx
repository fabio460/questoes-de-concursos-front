import React from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import {  apiFake, listaDoMenu } from './lista';
import { findItemRecursive } from '../funcoesDoSistema';
import { useAppDispatch } from '../redux/hooks';
import { getChildren } from '../redux/childrenRedux';


function MenuSideBar({lista}:{lista?:any}){
  const dispatch = useAppDispatch()
  const onClick: MenuProps['onClick'] = (e) => {

    const result = findItemRecursive(apiFake, e.key);
    
    dispatch(getChildren(result))
  };
  // console.log(lista)
  // console.log(apiFake)
  return (
    <Menu
      onClick={e=> onClick(e)}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      aria-expanded   
      items={lista}
      theme="dark" 
    />
  );
};

export default MenuSideBar;