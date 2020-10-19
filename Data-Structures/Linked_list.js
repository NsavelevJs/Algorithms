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
  shift() { // Method that removes the first index
    if (!this.head) return undefined; // if it's not the head 
    let currentHead = this.head; // declare the first node
    this.head = currentHead.next;// give the value of the next node after the first node to the first node
    this.length--; // decrement the list 
    if (this.length === 0) { // if the lengths value is 0
      this.tail = null; // make the tail null
    }
    return currentHead; // return the shifted value
  }
  unshift(value) { //Mathod to add to the begining of the linked list
    let newNode = new Node(value); // declare a new node
    if (!this.head) { // if its not the head
      this.head = newNode; // give the first node the value of the newNode
      this.tail = this.head; //give the tail the value of the first node
    } else { // otherwise
      newNode.next = this.head; //give the value of the first node to the newNodes next value
      this.head = newNode; // give value of the newNode to the first node
    }
    this.length++; // incremenet the length of the list
    return this; // return the list
  }
  get(index) { // gets the value of the requested node
    if (index < 0 || index >= this.length) return null; // if its not in the list return null
    let counter = 0; // declare a counter with the value of 0
    let current = this.head; // declare the current value of the first node
    while (counter != index) { // as long counter is not equal to the index
      current = current.next; // give the value of the next value of the current index to the current index
      counter++;//increment the counter
    }
    return current; return 
  }
  set(index, value) {//sets the value of the index provided
    let node = this.get(index);// declare the index node
    if (!node) return false;// if its not equal to the node return false
    node.value = value;//give the value to the node
    return true;//return true
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);
    let newNode = new Node(value);
    let prevNode = this.index(index - 1);
    let nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.next = nextNode;
    this.length++;
    return true;
  }
  remove(index) { //Method that removes a node
    if (index < 0 || index >= this.length) return false; // if the index is less than 0 or greater than or equal to the length of the list
    if (index === this.length - 1) return this.pop(); // if the index's value is the last index in the list remove it
    if (index === 0) return this.shift(); // if its the first index remove the firs index
    let prevNode = this.index(index - 1); // declare the previous node
    let node = prevNode.next; // give the node the value of the one after the previous node
    prevNode.next = node.next; // give the value of previous nodes net value to the nodes next value
    this.length--; //decrement the length of the linked list
    return node; // return the node that was removed
  }
  reverse(){ 
    //Method that reverses the list in place 
    let node = this.head // first node
    this.head = this.tail // give the first nodes value the last nodes value
    this.tail = node // give the last node the first nodes value
    let prev = null // declare prev as being null
    let next = node.next // declare the next node
    for(let i = 0; i<this.lenght; i++){ // iterate throught the list and reverse the rest of the list
      next = node.next 
      node.next = prev
      prev = node 
      node = next
    }
    return this //return the list
  }
}
