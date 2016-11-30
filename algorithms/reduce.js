const reduce = (collection, iterator, accumulator, passed = false) =>
  (!collection.length) ? accumulator : reduce(
    collection.slice(1), iterator, (accumulator === undefined && !passed) ? accumulator[0] : iterator(accumulator, accumulator[0]), true
  );
