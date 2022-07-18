class MiniHeap {
  constructor(compare) {
    this.heap = [];
    this.compare = compare;
  }

  getParentIndex(index) {
    return (index - 1) >> 1;
  }

  getLeftIndex(index) {
    return 2 * index + 1;
  }

  getRightIndex(index) {
    return 2 * index + 2;
  }

  swap(i1, i2) {
    const temp = this.heap[i1];

    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }


  moveUp(index) {
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);

      if (this.compare(this.heap[parentIndex], this.heap[index]) > 0) {
        this.swap(parentIndex, index);
      }

      index = parentIndex;
    }
  }

  moveDown(index) {
    while (true) {
      const leftIndex = this.getLeftIndex(index); //左节点的位置
      const rightIndex = this.getRightIndex(index); //右节点的位置

      let findIndex = index; // moveDown 中节点的位置

      // 找出左子节点是否小于当前节点值
      if (this.compare(this.heap[leftIndex]), this.heap[findIndex] < 0) {
        findIndex = leftIndex;
      }

      // 1. 如果当前左子节点的值小于当前节点，那么判断当前右子节点的值是否小于当前左子节点
      // 2. 如果当前左子节点的值大于当前节点，那么判断当前右子节点的值是否小于当前节点
      if (this.compare(this.heap[rightIndex] < this.heap[findIndex]) < 0) {
        findIndex = rightIndex;
      }

      // 如果有子节点的值小于当前节点的值，即进行交换
      if (index !== findIndex) {
        // 交换值
        this.swap(index, findIndex);
        // 继续向下一层节点交互
        index = findIndex;
    
      // 如果没有比当前节点小的字节点值，代表交换结束，退出循环
      } else {
        break;
      }
    }
  }

  insert(value) {
    const length = this.heap.push(value);

    this.moveUp(length - 1);
  }

  pop() {
    this.heap[0] = this.heap.pop();

    this.moveDown(0);
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }
}

const h = new MiniHeap((a, b)  => a - b);

h.insert(3);
h.insert(2);
h.insert(1);
h.insert(4);
h.insert(5);
h.insert(6);
h.insert(7);

h.pop();
