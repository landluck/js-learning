function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * Definition for singly-linked list.
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    if (!list1 && !list2) {
        return list1;
    }

    let p1 = list1;
    let p2 = list2;

    const result = new ListNode(0);

    let p3 = result;

    while(p1 && p2) {
        if (p1.val < p2.val) {
            const next = p1.next;
            p1.next = null;
            p3.next = p1;

            p1 = next;
        } else {
            const next = p2.next;

            p2.next = null;
            p3.next = p2;

            p2 = next;
        }

        p3 = p3.next;
    }

    if (p1) {
        p3.next = p1;
    }

    if (p2) {
        p3.next = p2;
    }


    return result.next;
};


const node13 = new ListNode(4);
const node12 = new ListNode(2, node13);
const node1 = new ListNode(1, node12);

const node22 = new ListNode(4);
const node21 = new ListNode(3, node22);
const node2 = new ListNode(1, node21);

mergeTwoLists(node1, node2);