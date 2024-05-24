import { LinkedList } from "../linked-list"

describe('Linked List', () => {
    it('should create an empty list', () => {
        const list = new LinkedList();

        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
        expect(list.length).toBe(0);
    })
    it('should push node to linked list', () => {
        const list = new LinkedList();

        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
        expect(list.length).toBe(0);

        list.push(4)
        list.push(5)
        list.push(6)

        expect(list.toString()).toBe('4,5,6');
        expect(list.tail!.next).toBeNull();
    })
})