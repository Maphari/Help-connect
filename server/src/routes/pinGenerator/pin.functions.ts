
function generateEmailPin(): string {
  // Generate a random number between 0 and 9999.
  const randomPin = Math.floor(Math.random() * 10000);
  // Ensure the number has exactly 4 digits by padding with zeros if needed.
  let fourDigitPin = randomPin.toString().padStart(4, "0");

  return fourDigitPin;
}

export { generateEmailPin };
