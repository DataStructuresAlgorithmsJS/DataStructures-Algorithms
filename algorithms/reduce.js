const reduce = (collection, iterator, accumulator, passed = false) =>
  (!collection.length) ? accumulator : reduce(
    collection.slice(1), iterator, (accumulator === undefined && !passed) ? collection[0] : iterator(accumulator, collection[0]), true
  );
