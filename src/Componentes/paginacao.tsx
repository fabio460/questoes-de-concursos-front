import React, { useState } from 'react';
import { Pagination, PaginationProps } from 'antd';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { getPagina } from '../redux/paginaRedux';

function Paginacao(){
    const [current, setCurrent] = useState(1);
    const dispatch = useAppDispatch()
    const tamanhoDaLista = useAppSelector((state)=>state.tamDaListaRedux.tamanho)
    const onChange: PaginationProps['onChange'] = (page) => {
      setCurrent(page);
      dispatch(getPagina(page))
    };
    return <Pagination current={current} onChange={onChange} defaultCurrent={1} total={Math.floor(tamanhoDaLista/2)*10} />
}

export default Paginacao;