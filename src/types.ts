export type RadioQuestoesType ={
   titulo:string,
   corpo:string[]
}[]

export type questionsTypes = {
   alternativas: string[]
   banca:string
   id:string
   idDoUsuario:string
   materia:string
   pergunta:string
   resposta:string
   subItemDaMateria:string
   titulo:string
   usuario:usurioTypes
}

export type usurioTypes = {
   email:string
   id:string
   nome:string
}