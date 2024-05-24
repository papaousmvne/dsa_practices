import { LinkedListNode, MaybeLinkedListNode } from "./linked-list-node";

export class LinkedList {
  /**
   * @type {MaybeLinkedListNode}
   */
  public head: MaybeLinkedListNode;
  /**
   * @type {MaybeLinkedListNode}
   */
  public tail: MaybeLinkedListNode;
  /**
   * @type {number}
   */
  public length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Adding a new node to the end of the linked list
   * @param {any} value - A any type param
   * @returns {LinkedList} - Return a linked list
   */
  push(value: any): LinkedList {
    const node = new LinkedListNode(value);
    if (!this.head) {
      this.head = node;
    } else {
      this.tail!.next = node;
    }
    this.tail = node;

    this.length++;
    return this;
  }

  /**
   * Removing a node from the end of the linked list
   * @returns {LinkedListNode} - Return a linked list node popped
   */
  pop(): LinkedListNode | undefined {
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    let newTail = current;
    while(current.next) {
      newTail = current;
      current = current.next
    }
    this.tail = newTail;
    this.tail.next = null
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  /**
     * Returns an array representation of a linked list
     * @returns LinkedListNode
     */
  toArray(): LinkedListNode[] {
    const array: LinkedListNode[] = [];

    let node = this.head;
    while (node) {
        array.push(node);
        node = node.next;
    }

    return array;
}

  /**
     * Returns an string representation of a linked list
     * @param  {(value:any)=>string} callback?
     * @returns string
     */
  toString(callback?: (value: any) => string): string {
    return this.toArray().map(node => node.toString(callback)).toString();
}

}
