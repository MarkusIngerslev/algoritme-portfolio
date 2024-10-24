export default class Queue {
    _head = null;
    _tail = null;
    _size = 0;

    constructor(nodes) {
        if (!!nodes) {
            nodes.forEach((node) => {
                this.add(node);
            });
        }
    }

    push(data) {
        const node = new Node(data, null);
        if (!this._head) {
            this._head = node;
            this._tail = node;
        } else {
            this._tail.next = node;
            this._tail = node;
        }
        this._size++;
    }

    getHead() {
        return this._head;
    }

    removeHead() {
        if (!!this._head) {
            this._head = this._head.next;
        }
        this._size--;
    }

    getTail() {
        return this._tail;
    }

    size() {
        return this._size;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this._size = 0;
    }

    dumpList() {
        if (this._head) {
            let current = this._head;
            let dump = "";
            while (current) {
                dump += current.data + " ";
                current = current.next;
            }
            return dump;
        }
    }
}

class Node {
    next = null;
    data = null;

    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}
