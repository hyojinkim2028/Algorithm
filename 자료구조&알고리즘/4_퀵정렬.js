function quicSort(arr) {
  let answer = arr
  if (arr.length <= 1) return answer

  let pivot = arr[0]
  let left = []
  let rigth = []

  for (let i = 1; i < answer.length; i++) {
    // 피봇값+1 번째부터 시작
    if (arr[i] <= pivot) left.push(arr[i])
    else rigth.push(arr[i])
  }

  let leftSort = quicSort(left)
  let rigthSort = quicSort(rigth)

  answer = [...leftSort, pivot, ...rigthSort]
  return answer
}

let arr = [1, 5, 100, 19, 71, 6, 8, 4, 90, 49, 3, 2]
console.log(quicSort(arr))
