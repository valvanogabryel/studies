function recursiveChunk(quantity) {
    if (quantity === 0) return '';
    return quantity === 1 ? 'chunk' : 'chunk-' + recursiveChunk(quantity - 1);
}

console.log(recursiveChunk(4));
console.log(recursiveChunk(1));
console.log(recursiveChunk(8));
console.log(recursiveChunk(2));