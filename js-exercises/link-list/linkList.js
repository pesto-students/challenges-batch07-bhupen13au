import LinkListNode from './linkListNode';

export default class LinkList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  prepend(value) {
    const node = new LinkListNode(value);
    node.next = this.head;
    this.head = node;
    this.size += 1;
  }

  append(value) {
    const node = new LinkListNode(value);
    let current;
    if (this.head == null) this.head = node;
    else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size += 1;
  }

  delete(value) {
    let current = this.head;
    let prev = null;

    while (current != null) {
      if (current.value === value) {
        if (prev == null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size -= 1;
        return current.value;
      }
      prev = current;
      current = current.next;
    }
    return false;
  }

  traverse(fn) {
    let current = this.head;

    while (current != null) {
      if (fn) {
        fn(current.value);
        current = current.next;
      } else (current = current.next);
    }
  }

  contains(value) {
    let current = this.head;

    while (current != null) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  length() {
    return this.size;
  }
}
