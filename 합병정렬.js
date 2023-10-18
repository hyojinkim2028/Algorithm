function merge(left, right) {
  let sortedArr = []

  while (left.length && right.length) {
    // left 숫자가 right 숫자 이하인 경우 left 숫자를 sortedArr 배열에 넣고 left에서는 삭제
    if (left[0] <= right[0]) {
      sortedArr.push(left.shift())
      // 아닌 경우 right숫자를 sortedArr 배열에 넣고 right 배열에서 삭제
    } else {
      sortedArr.push(right.shift())
    }
  }

  return [...sortedArr, ...left, ...right]
  //left,right 둘 중 하나는 요소가 남아있기 때문에 sortedArr 뒤에 붙여서 출력 (남아있는 요소가 없어도 빈배열이니 그냥 다 붙여도됨)
}

function mergeSort(arr) {
  // 배열값이 1개면 그대로 리턴
  if (arr.length === 1) {
    return arr
  }

  // 배열을 왼쪽, 오른쪽으로 나눔
  let boundary = Math.ceil(arr.length / 2) // slice 문법을 사용하므로 올림해줌

  let left = arr.slice(0, boundary)
  let right = arr.slice(boundary)
  //요소가 1개 일 때까지 재귀를 실행해 요소가 1개일 때 두 left,right부터
  //차근차근 merge(정렬해서 합치기)해주면 된다.
  return merge(mergeSort(left), mergeSort(right))
}

const arr = [7, 4, 3, 2, 1, 6, 5]
const sortedArray = mergeSort(arr)
console.log(sortedArray) //[1, 2, 3, 4,5, 6, 7]
