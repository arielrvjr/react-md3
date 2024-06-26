/**
 * Convierte un color hexadecimal a rgba.
 *
 * @param {string} hex - El color en formato hexadecimal (por ejemplo, '#RRGGBB' o '#RGB').
 * @param {number} [opacity=1] - La opacidad del color, opcional, con un valor por defecto de 1.
 * @returns {string} El color en formato rgba.
 */
const hexToRgba = (hex: string, opacity = 1): string  => {
  hex = hex.replace(/^#/, '');

  // Si el valor es de 3 caracteres, convertirlo a 6 caracteres
  if (hex.length === 3) {
    hex = hex
      .split('')
      .map((char) => char + char)
      .join('');
  }

  // Extraer los valores RGB
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  // Construir el valor rgba
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export default hexToRgba;