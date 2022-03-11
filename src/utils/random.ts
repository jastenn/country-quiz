export default function random<T>(
  arr: T[],
  num: number = 1,
  exclude: T[] = []
): T[] {
  const res: T[] = []

  while (res.length < num) {
    const item = arr[Math.floor(Math.random() * arr.length)]

    if (item in res || item in exclude) continue

    res.push(item)
  }

  return res
}
