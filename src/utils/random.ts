export default function random<T>(
  arr: T[],
  num: number = 1,
  exclude: T[] = []
): T[] {
  const result: T[] = []

  while (result.length < num) {
    const item = arr[Math.floor(Math.random() * arr.length)]

    if (result.includes(item) || exclude.includes(item)) continue

    result.push(item)
  }

  return result
}
