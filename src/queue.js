const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.tail = null;
    this.peek = null;
  }

  getUnderlyingList() {
    return this.peek;
  }

  enqueue(value) {
    if (this.tail !== null) {
      this.tail.next = new ListNode(value);
      this.tail = this.tail.next;
    } else {
      this.tail = new ListNode(value);
      this.peek = this.tail;
    }
  }

  dequeue() {
    let value = null;
    if (this.peek.next === null) {
      value = this.peek.value; 
      this.peek = null;
      this.tail = null;
      return value;
    } else {
      value = this.peek.value;
      this.peek = this.peek.next;
      return value;
    }
  }
}

module.exports = {
  Queue
};
