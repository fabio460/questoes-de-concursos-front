export const indexandoLetras = (num:number)=>{
   switch (num) {
    case 0:
        return "A)"
    case 1:
        return "B)"
    case 2:
        return "C)"
    case 3:
        return "D)"
    case 4:
        return "E)"
                                           
    default:
        return ""
   }
}

export function findItemRecursive(array:any, key:any) {
    for (let obj of array) {
      // Verifica se o objeto atual tem o id desejado
      if (obj.key === key) {
        return obj;
      }
  
      // Se houver um array aninhado (ex: 'items'), chama a função recursivamente
      if (obj.children && Array.isArray(obj.children)) {
        const found:any = findItemRecursive(obj.children, key);
        if (found) return found;
      }
    }
    return null; // Retorna null se o item não for encontrado
  }