function dropElements(elements, predicate) {
  return elements.filter(value => predicate(value));
}

export { dropElements };
