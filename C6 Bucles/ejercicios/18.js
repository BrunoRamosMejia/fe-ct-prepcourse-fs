function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  if (min <= 0 && max >= 0) return 0;
  let resultado = 1;
  for (let i = min; i <= max; i++) {
    resultado = resultado * i;
  }
  return resultado;
}

module.exports = productoEntreNúmeros;