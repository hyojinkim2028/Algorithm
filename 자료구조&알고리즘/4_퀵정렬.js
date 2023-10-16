function quicSort(arr) {
  let answer = arr
  if (arr.length <= 1) return answer

  let pivot = arr[0]
  let left = []
  let rigth = []

  // 피봇값+1 번째부터 시작
  for (let i = 1; i < answer.length; i++) {
    // 값이 피봇값보다 작거나 같으면 왼쪽에
    if (arr[i] <= pivot) left.push(arr[i])
    // 크면 오른쪽에 넣음
    else rigth.push(arr[i])
  }

  // 재귀함수 -> 더 자를수 없을때까지 함수 안에 함수를 돌림
  let leftSort = quicSort(left)
  let rigthSort = quicSort(rigth)

  // 전개구문으로 한 배열안에 넣어 리턴
  answer = [...leftSort, pivot, ...rigthSort]
  return answer
}

let arr = [1, 5, 100, 19, 71, 6, 8, 4, 90, 49, 3, 2]
console.log(quicSort(arr))
