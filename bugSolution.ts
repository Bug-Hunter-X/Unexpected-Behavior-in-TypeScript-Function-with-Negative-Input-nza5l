function printNumbers(n: number): void {
  if (n <= 0) {
    console.error("Invalid input: n must be a positive integer.");
    return;
  }
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // Works as expected
printNumbers(-5); // Outputs an error message
printNumbers(0); // Outputs an error message