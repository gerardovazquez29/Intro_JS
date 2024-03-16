//* Arreglos


let miArreglo = [1, 2, 3, 4];

miArreglo[2] = 10;

console.log(miArreglo); //* Salida: [1, 2, 10, 4]

console.log('_______________________________________');
//* Lista Enlazada

//* Definición del nodo de la lista enlazada

class Node {
  constructor(data) {
    this.data = data; //* Valor del nodo
    this.next = null; //* Referencia al siguiente nodo
  }
}

//* Definición de la lista enlazada

class LinkedList {
  constructor() {
    this.head = null; //* Puntero al primer nodo de la lista
    this.size = 0;    //* Tamaño de la lista
  }

  //* Método para agregar un nuevo nodo al final de la lista

  add(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  //* Método para imprimir los valores de la lista enlazada

  print() {
    let current = this.head;
    let result = '';
    while (current) {
      result += current.data + ' -> ';
      current = current.next;
    }
    result += 'null';
    console.log(result);
  }
}

//* Ejemplo de uso

const listaEnlazada = new LinkedList();
listaEnlazada.add(1);
listaEnlazada.add(2);
listaEnlazada.add(3);

listaEnlazada.print(); //* Salida: 1 -> 2 -> 3 -> null
