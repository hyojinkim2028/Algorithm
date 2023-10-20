function mySort_heap() {
  let heap = [6, 8, 9, 4, 3, 5, 7]
  for (let i = 1; i < heap.length; i++) {
    let child = i
    do {
      let parent = Math.floor((child - 1) / 2) //부모 인덱스 추출
      if (heap[parent] < heap[child]) {
        ;[heap[parent], heap[child]] = [heap[child], heap[parent]]
      }
      child = parent
    } while (child != 0)
  }

  // 크기를 줄여가며 반복하여 힙을 만든다.

  for (let i = heap.length - 1; i >= 0; i--) {
    ;[heap[0], heap[i]] = [heap[i], heap[0]] // 가장 큰 값을 오른쪽으로 보내고 기존 배열의 마지막 부분을 앞으로 가져옴

    let parent = 0 // parent 초기화

    do {
      child = 2 * parent + 1 // child의 인덱스 구함
      if (child < i - 1 && heap[child] < heap[child + 1]) {
        // 인덱스값이 i-1 보다 작고 해당 child 값이 child + 1 보다 작으면 인덱스값 늘려주기
        child++
      }
      if (child < i && heap[parent] < heap[child]) {
        // child가 i 인덱스값보다 작고 child가 parent 보다 크면 자리 바꾸기
        ;[heap[parent], heap[child]] = [heap[child], heap[parent]]
      }
      parent = child // 이미 정렬된 힙 아래로 내려갈 필요 없게
      console.log(child)
    } while (child < i)
  }
  console.log(heap)
}

mySort_heap()
