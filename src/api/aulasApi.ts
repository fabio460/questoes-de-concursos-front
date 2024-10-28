import { link } from "./link"

export const listarQuestoesApi = async () => {
    const l = await fetch(link+"questoes/listar")
    return l.json()
       .then((res)=>res)
}

export const adicionarQuestaoApi = async (idDoUsuario:string ,subItemDaMateria:string,materia:string, banca:string, alternativas:string[],pergunta:string, resposta:string, titulo:string) => {
    const l = await fetch(link+"/questoes/adicionarquestoes",{
        method:"post",
        body:JSON.stringify({idDoUsuario ,subItemDaMateria,materia, banca, alternativas,pergunta, resposta, titulo})
    })
    return l.json()
       .then((res)=>res)
}