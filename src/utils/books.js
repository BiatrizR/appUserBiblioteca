//gerar lista de livros de uma tamnho determinado

export function getListBooks(size, books){
    let showList = [];
    for (let i = 0, l = size; i < l; i++){
        showList.push(books[i])
    }

    return showList;

}