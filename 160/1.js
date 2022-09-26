var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) {
    return null;
  }
  let pA = headA,
    pB = headB;
    
  while (pA !== pB) {
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }
  return pA;
};



function ListNode(val) {
  this.val = val;
  this.next = null;
}


const a1 = new ListNode(4);
const a2 = new ListNode(1);
const b1 = new ListNode(5);
const b2 = new ListNode(6);
const b3 = new ListNode(1);
const c1 = new ListNode(8);
const c2 = new ListNode(4);
const c3 = new ListNode(5);

a1.next = a2;
a2.next = c1;

c1.next = c2;
c2.next = c3;

b1.next = b2;
b2.next = b3;
b3.next = c1;

getIntersectionNode(a1, b1);