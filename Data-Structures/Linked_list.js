// Linked list is a linear data structure where each element is a seperate object
// Made of nodes with a head and a tail
// The head can go next but the tail can not.

const { createRequire } = require("module");

//Defines a Node class and passes it a value argument in it's constructor

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  //Defines the head and tail and set the length to the begining of the array
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(value) {
    let newNode = new Node(value); //declare a new class of Node with the provided value.
    if (!this.head) {
      // if its not the value of the head
      this.head = newNode; // make it the head of the linked list
      this.tail = this.head; // and pass the value of the head to the tail
    } else {
      // otherwise
      this.tail.next = newNode; // adds a new node to the end of the list.
      this.tail = newNode;
    }
    this.length++; // increment the value of the this which is the newNode
    return this; // return the newNode
  }
  pop() {
    // removes the last element
    if (!this.head) return undefined; // if theres no head return undefined
    let current = this.head; //declares the current head
    let newTail = current; //declares the tail being the head
    while (current.next) {
      // as long as there's a next
      newTail = current; // make it the tail the current value
      current = current.next; // and give the current value the next value
    }
    this.tail = newTail; // the tails new value is the tail
    this.tail.next = null; // theres nothing after the tail
    this.length--; // continue down the line decrementing the length
    if (this.length === 0) {
      // if the length is nothing
      this.head = null; // make the value of the head null
      this.tail = null; // and make the value of the tail null
    }
    return current; // return the current value
  }
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
}
