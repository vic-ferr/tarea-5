console.log("hola");

for (let i = 0; i <= 1000; i++) {
  if (i % 2 === 0) {
    console.log("i es par" + i);
  } else console.log("i es impar" + i);
}

const fibonacci = (limite) => {
  const inicioFibonacci = [0, 1];
  for (let i = 2; i < limite; i++) {
    inicioFibonacci[i] = inicioFibonacci[i - 1] + inicioFibonacci[i - 2];
  }
  return inicioFibonacci;
};
console.log(fibonacci(18));
