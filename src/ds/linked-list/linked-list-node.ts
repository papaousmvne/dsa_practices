export type MaybeLinkedListNode = LinkedListNode | null;

/**
 * Class Linked list node
 */
export class LinkedListNode {
  // piece of data
  public value: any;
  // reference to next node
  public next: MaybeLinkedListNode;

  constructor(value: any, next: MaybeLinkedListNode = null) {
    this.value = value;
    this.next = next;
  }

  toString(callback?: (value: any) => string) {
    return callback ? callback(this.value) : `${this.value}`;
}
}
