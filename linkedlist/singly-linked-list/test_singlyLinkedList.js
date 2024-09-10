// Importér SinglyLinkedList-klassen fra dit module
import { SinglyLinkedList } from "./singlyLinkedList.js";

// Opret en ny liste
const list = new SinglyLinkedList();

// Test add() metoden
console.log("Tilføjer elementer:");
list.add("First");
list.add("Second");
list.add("Third");
console.log("Efter tilføjelser: ", list.size()); // Forventet output: 3

// Test getFirst() og getLast() metoderne
console.log("Første element: ", list.getFirst()); // Forventet output: 'First'
console.log("Sidste element: ", list.getLast()); // Forventet output: 'Third'

// Test get(index) metoden
console.log("Element ved index 1: ", list.get(1)); // Forventet output: 'Second'

// Test getFirstNode() og getLastNode() metoderne
console.log("Første node data: ", list.getFirstNode().data); // Forventet output: 'First'
console.log("Sidste node data: ", list.getLastNode().data); // Forventet output: 'Third'

// Test remove(data) metoden
console.log('Fjerner "Second":');
list.remove("Second");
console.log('Efter fjernelse af "Second", størrelse: ', list.size()); // Forventet output: 2
console.log("Første element: ", list.getFirst()); // Forventet output: 'First'
console.log("Sidste element: ", list.getLast()); // Forventet output: 'Third'

// Test removeFirstNode() og removeLastNode() metoderne
console.log("Fjerner første node:");
list.removeFirstNode();
console.log("Efter fjernelse af første node, størrelse: ", list.size()); // Forventet output: 1
console.log("Første element: ", list.getFirst()); // Forventet output: 'Third'

console.log("Fjerner sidste node:");
list.removeLastNode();
console.log("Efter fjernelse af sidste node, størrelse: ", list.size()); // Forventet output: 0
console.log("Er listen tom? ", list.getFirst()); // Forventet output: null

// Test clear() metoden
list.add("New First");
list.add("New Second");
console.log("Tilføjer nye elementer, størrelse: ", list.size()); // Forventet output: 2
list.clear();
console.log("Efter clear(), størrelse: ", list.size()); // Forventet output: 0
