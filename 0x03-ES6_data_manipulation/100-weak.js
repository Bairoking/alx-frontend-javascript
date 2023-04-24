/* Sanna Bah */
export const weakMap = new WeakMap();
let count = 1;

export function queryAPI(endPoint) {
  weakMap.set(endPoint, count);
  count += 1;
  const myQueryCount = weakMap.get(endPoint);
  if (myQueryCount >= 5) {
    throw new Error('Endpoint load is high');
  }
}
