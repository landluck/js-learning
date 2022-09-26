function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  // merge
  function merge(n1, n2) {
    let p1 = n1;
    let p2 = n2;

    const dummy = new ListNode();

    let p3 = dummy;

    while (p1 && p2) {
      if (p1.val <= p2.val) {
        p3.next = p1;
        p1 = p1.next;
      } else {
        p3.next = p2;
        p2 = p2.next;
      }

      p3 = p3.next;
    }

    if (p1) {
      p3.next = p1;
    }

    if (p2) {
      p3.next = p2;
    }

    return dummy.next;
  }

  function toSortList(head, end) {
    if (head == null) {
      return head;
    }

    if (head.next === end) {
      head.next = null;
      return head;
    }

    let slow = head;
    let fast = head;

    while (fast !== end) {
      fast = fast.next;
      slow = slow.next;

      if (fast !== end) {
        fast = fast.next;
      }
    }

    return merge(toSortList(head, slow), toSortList(slow, end));
  }

  return toSortList(head, null);
};


const a1 = new ListNode(4);
const a2 = new ListNode(1);
const a3 = new ListNode(5);
const a4 = new ListNode(6);

a3.next = a4;
a2.next = a3;
a1.next = a2;

sortList(a1);