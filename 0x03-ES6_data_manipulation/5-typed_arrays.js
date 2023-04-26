/* Sanna Bah */
export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const sann = new DataView(buffer);

  /* checking if position is outside range */
  if (position >= length) throw new Error("Position outside range");
  /* setting new value in the desired position */
  sann.setInt8(position, value);

  return sann;
}
