// Node-klasse, som indeholder både data og en reference til den næste node
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// SinglyLinkedList-klassen, som håndterer listen af nodes
export class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    // Tilføj data som en ny node til slutningen af listen
    add(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.length++;
    }

    // Fjern en node med specifik data fra listen
    remove(data) {
        if (this.head === null) return null;

        if (this.head.data === data) {
            this.head = this.head.next;
            this.length--;
            return;
        }

        let current = this.head;
        while (current.next !== null && current.next.data !== data) {
            current = current.next;
        }

        if (current.next !== null) {
            current.next = current.next.next;
            this.length--;
        }
    }

    // Returnér data i den første node
    getFirst() {
        return this.head ? this.head.data : null;
    }

    // Returnér data i den sidste node
    getLast() {
        if (this.head === null) return null;

        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        return current.data;
    }

    // Returnér data-objektet ved et givent index
    get(index) {
        if (index < 0 || index >= this.length) return null;

        let current = this.head;
        let count = 0;
        while (count < index) {
            current = current.next;
            count++;
        }
        return current.data;
    }

    // Returnér den første node
    getFirstNode() {
        return this.head;
    }

    // Returnér den næste node efter den angivne node
    getNextNode(node) {
        return node ? node.next : null;
    }

    // Returnér den sidste node
    getLastNode() {
        let current = this.head;
        while (current && current.next !== null) {
            current = current.next;
        }
        return current;
    }

    // Find en node med en bestemt data
    getNodeWith(data) {
        let current = this.head;
        while (current !== null) {
            if (current.data === data) return current;
            current = current.next;
        }
        return null;
    }

    // Fjern en given node
    removeNode(node) {
        if (this.head === null || node === null) return null;

        if (this.head === node) {
            this.head = this.head.next;
            this.length--;
            return;
        }

        let current = this.head;
        while (current.next !== null && current.next !== node) {
            current = current.next;
        }

        if (current.next === node) {
            current.next = current.next.next;
            this.length--;
        }
    }

    // Fjern den første node
    removeFirstNode() {
        if (this.head !== null) {
            this.head = this.head.next;
            this.length--;
        }
    }

    // Fjern den sidste node
    removeLastNode() {
        if (this.head === null) return;

        if (this.head.next === null) {
            this.head = null;
        } else {
            let current = this.head;
            while (current.next.next !== null) {
                current = current.next;
            }
            current.next = null;
        }
        this.length--;
    }

    // Indsæt en ny node efter en given node
    insertAfter(node, data) {
        if (node === null) return null;

        const newNode = new Node(data);
        newNode.next = node.next;
        node.next = newNode;
        this.length++;
    }

    // Fjern alle nodes fra listen
    clear() {
        this.head = null;
        this.length = 0;
    }

    // Returnér antallet af nodes i listen
    size() {
        return this.length;
    }
}
