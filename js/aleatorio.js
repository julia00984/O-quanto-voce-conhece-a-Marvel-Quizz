const nomes = ["Julia", "Enzo", "Manuela", "Theo", "Alice", "Miguel", "Helena"];

export function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);
