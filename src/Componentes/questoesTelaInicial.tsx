import React, { useEffect, useState } from 'react'
import { listarQuestoesApi } from '../api/aulasApi'
import { questionsTypes } from '../types'
import QuestoesBody from './questoesBody'
import  "../styles/questionStyle.css";

export default function QuestoesTelaInicial() {
  const [loading, setLoading] = useState<boolean>(true);
  const [listaDeQuestoes, setListaDeQuestoes] = useState<questionsTypes[]>([])
  async function getQuestions() {
    const r = await listarQuestoesApi()
    setListaDeQuestoes(r) 
    setLoading(false)
  }
  useEffect(() => {
     getQuestions()
  }, [])
  
  return (
    <div className='questionBody'>
      <QuestoesBody listaDeQuestoes={listaDeQuestoes} loading={loading}/>
    </div>
  )
}
