export class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0; // Antal noder i listen
    }

    // Tilføjer et element til slutningen af listen
    addLast(data) {
        const newNode = new Node(data);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    // Tilføjer et element til begyndelsen af listen
    addFirst(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
    }

    // Returnerer elementet på plads nummer index
    get(index) {
        const node = this.nodeAt(index);
        return node ? node.data : undefined;
    }

    // Finder index for et specifikt element (payload)
    indexOf(data) {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.data === data) return index;
            current = current.next;
            index++;
        }
        return -1; // Returnerer -1, hvis elementet ikke findes
    }

    // Indsætter et nyt element efter et givent index
    insertAfter(index, data) {
        const current = this.nodeAt(index);
        if (!current) return;
        const newNode = new Node(data);
        newNode.next = current.next;
        newNode.prev = current;
        if (current.next) current.next.prev = newNode;
        current.next = newNode;
        if (current === this.tail) this.tail = newNode;
        this.length++;
    }

    // Indsætter et nyt element før et givent index
    insertBefore(index, data) {
        const current = this.nodeAt(index);
        if (!current) return;
        const newNode = new Node(data);
        newNode.next = current;
        newNode.prev = current.prev;
        if (current.prev) current.prev.next = newNode;
        current.prev = newNode;
        if (current === this.head) this.head = newNode;
        this.length++;
    }

    // Fjerner et element baseret på payload
    remove(data) {
        let current = this.head;
        while (current) {
            if (current.data === data) {
                this.removeNode(current);
                return true;
            }
            current = current.next;
        }
        return false;
    }

    // Fjerner noden på et givent index
    removeIndex(index) {
        const node = this.nodeAt(index);
        if (node) {
            this.removeNode(node);
        }
    }

    // Fjerner den første node
    removeFirst() {
        if (!this.head) return null;
        const data = this.head.data;
        this.removeNode(this.head);
        return data;
    }

    // Fjerner den sidste node
    removeLast() {
        if (!this.tail) return null;
        const data = this.tail.data;
        this.removeNode(this.tail);
        return data;
    }

    // Returnerer noden på et givent index
    nodeAt(index) {
        if (index < 0 || index >= this.length) return null;
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

    // Tilføjer en ny node til slutningen af listen
    addNodeLast(newNode) {
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    // Tilføjer en ny node i starten af listen
    addNodeFirst(newNode) {
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
    }

    // Indsætter en node efter en eksisterende node
    insertAfterNode(newNode, existingNode) {
        newNode.prev = existingNode;
        newNode.next = existingNode.next;
        if (existingNode.next) existingNode.next.prev = newNode;
        existingNode.next = newNode;
        if (existingNode === this.tail) this.tail = newNode;
        this.length++;
    }

    // Indsætter en node før en eksisterende node
    insertBeforeNode(newNode, existingNode) {
        newNode.next = existingNode;
        newNode.prev = existingNode.prev;
        if (existingNode.prev) existingNode.prev.next = newNode;
        existingNode.prev = newNode;
        if (existingNode === this.head) this.head = newNode;
        this.length++;
    }

    // Fjerner en eksisterende node
    removeNode(node) {
        if (!node.prev) {
            this.head = node.next;
        } else {
            node.prev.next = node.next;
        }
        if (!node.next) {
            this.tail = node.prev;
        } else {
            node.next.prev = node.prev;
        }
        this.length--;
    }

    // Bytter om på to nodes pladser
    swapNodes(nodeA, nodeB) {
        if (nodeA === nodeB) return;

        const tempPrev = nodeA.prev;
        const tempNext = nodeA.next;

        nodeA.prev = nodeB.prev;
        nodeA.next = nodeB.next;

        nodeB.prev = tempPrev;
        nodeB.next = tempNext;

        if (nodeA.prev) nodeA.prev.next = nodeA;
        if (nodeA.next) nodeA.next.prev = nodeA;
        if (nodeB.prev) nodeB.prev.next = nodeB;
        if (nodeB.next) nodeB.next.prev = nodeB;

        if (nodeA === this.head) this.head = nodeB;
        if (nodeB === this.head) this.head = nodeA;
        if (nodeA === this.tail) this.tail = nodeB;
        if (nodeB === this.tail) this.tail = nodeA;
    }

    // Fjerner alle elementer fra listen
    clear() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Returnerer antallet af nodes i listen
    size() {
        return this.length;
    }

    // Udskriver hele listen i console
    dumpList() {
        let current = this.head;
        while (current) {
            console.log({
                data: current.data,
                prev: current.prev ? current.prev.data : null,
                next: current.next ? current.next.data : null,
            });
            current = current.next;
        }
    }
}
