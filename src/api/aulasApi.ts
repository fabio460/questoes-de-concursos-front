import { link } from "./link"

export const listaDeAulasApi = async () => {
    const l = await fetch(link+"/aulas/listar")
    return l.json()
       .then((res)=>res)
}