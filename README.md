This repository demonstrates an unexpected behavior in a simple TypeScript function when a negative number is passed as input. The function `printNumbers` is designed to print numbers from 1 to n. When a positive integer is provided, it works as expected. However, when a negative integer is input, the function silently exits without producing an error or handling the case appropriately.  This is unexpected behavior because a negative number should result in either an error or some other clear indication of invalid input. The solution provides a revised version of the function to handle this edge case more robustly.