import React, { useEffect, useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import SelectQuestaoMateria from './selectQuestaoMateria';
import MenuSideBar from './menuSideBar';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import AlternativaDasQuestoes from './alternativaDasQuestoes';
import Paginacao from './paginacao';
import { getTamLista } from '../redux/tamDaListaRedux';
import { apiFake, listaDoMenu } from './lista';
import { listarQuestoesApi } from '../api/aulasApi';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}



const Layout_2: React.FC = () => {
  const selectQuestaoConteudo = useAppSelector((state)=>state.clickSelectQuestoesMateriaRedux.select)
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const children:any = useAppSelector((state)=>state.childrenRedux.children)

  const pagina = useAppSelector((state)=>state.paginaRedux.pagina)
  const quantPorPag = 3
  const inicio = pagina*quantPorPag - quantPorPag
  const fim = pagina*quantPorPag
  const tamanhoDaLista = children?.questoes?.length
  const dispetch = useAppDispatch()
  dispetch(getTamLista(tamanhoDaLista))

  const [lista, setLista] = useState<any>([])
  const getLista = async () => {
    const l =await listarQuestoesApi()
    setLista(l)
  }
  useEffect(() => {
    getLista()
    //console.log(selectQuestaoConteudo)
  }, [])

  const listaDeQuesToesFiltrata = ()=>{
    //  if (lista?.children !== "") {
      
    //  }
    //  return lista?.children?.questoes?.filter((e:any,k:number)=>{
    //   if (k >= inicio && k < fim) {
    //     return e
    //   }
    //  })
  }

//console.log(listaDeQuesToesFiltrata())
//console.log(lista[0]?.questoes)
console.log(children)
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={300} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        {/* <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} /> */}
        <MenuSideBar lista={lista}/>
      </Sider>
      <Layout >
        <Header style={{ padding: 0, background: colorBgContainer }}>header</Header>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0', width:"50%" }}>
            <SelectQuestaoMateria lista={lista}/>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <div>{selectQuestaoConteudo}</div>
            {
              selectQuestaoConteudo === 'Conteudo'?
              <div>
                {children?.conteudo}
              </div>:
              <div>
                {
                 children && lista?.map((elem:any, key:any)=>{
                    return <div key={key}>
                       <AlternativaDasQuestoes 
                          titulo={elem.titulo} 
                          pergunta={elem.pergunta}
                          resposta={elem.resposta}
                          alternativas={elem.alternativas}  
                        />
                    </div>
                  })
                }
                <Paginacao/>
              </div>
            }
            
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Layout_2;