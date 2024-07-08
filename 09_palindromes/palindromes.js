function palindromes(text) {
    // Normalizează textul: elimină toate caracterele non-alfanumerice și convertește la litere mici
    const normalizedText = text.replace(/[^a-z0-9]/gi, '').toLowerCase();
  
    // Verifică dacă textul este un palindrom
    const length = normalizedText.length;
    for (let i = 0; i < length / 2; i++) {
      if (normalizedText[i] !== normalizedText[length - 1 - i]) {
        return false; // Dacă găsești o neconcordanță, nu este palindrom
      }
    }
    return true; // Dacă toate caracterele se potrivesc, este palindrom
  }
  
  module.exports = palindromes;
  