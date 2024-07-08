function fibonacci(n) {
    // Convertim n la număr întreg dacă este șir de caractere
    n = parseInt(n, 10);

    // Verificăm dacă n este un număr întreg pozitiv sau zero
    if (isNaN(n) || n < 0) {
        return "OOPS";
    }

    // Inițializăm primele două numere din secvența Fibonacci
    let a = 0, b = 1;

    // Generăm secvența Fibonacci până la al n-lea număr
    for (let i = 1; i < n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    // Returnăm al n-lea număr Fibonacci
    return n === 0 ? 0 : b;
}

module.exports = fibonacci;
