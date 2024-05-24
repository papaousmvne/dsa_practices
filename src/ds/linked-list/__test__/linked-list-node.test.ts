import { LinkedListNode } from "../linked-list-node"

describe('Linked List Node', () => {
    it('should create a node with value', () => {
        const node = new LinkedListNode(10);

        expect(node.value).toBe(10);
        expect(node.next).toBeNull();
    })
})