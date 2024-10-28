import React, { useState } from 'react'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { questionsTypes } from '../types';
import QuestionItem from './questionItem';
import { Flex } from 'antd';
import LoadingQuestionCard from './loadingQuestionCard';

const actions: React.ReactNode[] = [
  <EditOutlined key="edit" />,
  <SettingOutlined key="setting" />,
  <EllipsisOutlined key="ellipsis" />,
];

export default function QuestoesBody({listaDeQuestoes, loading}:{listaDeQuestoes:questionsTypes[], loading:boolean}) {

  const listLoading = [1,2,3,4,5]
  return (
    <Flex gap="middle" align="start" vertical>
        {
          loading ? 
              listLoading.map((e,k)=>{
                return(
                  <div key={k.toString()} style={{width:"100%"}}>
                    <LoadingQuestionCard loading={loading} actions={actions}/>
                  </div>
                )
              })
          :
          listaDeQuestoes.map((question,k)=>{
            return(
              <div key={k.toString()} style={{width:"100%"}}>
                <QuestionItem loading={loading} actions={actions} question={question}/>
              </div>
            )
          })
        }

    </Flex>
  );
}
