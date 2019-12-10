describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it('orders the elements in the array into ascending order', function() {
    expect(bubbleSort([9, 3, 4, 7, 1, 6])).toEqual([1, 3, 4, 6, 7, 9]);
    expect(bubbleSort(['f', 'x', 'g', 'w', 'a', 'z'])).toEqual([
      'a',
      'f',
      'g',
      'w',
      'x',
      'z',
    ]);
    it('does not use the javascript sort function', function() {
      expect(Array.prototype.sort.calls.count()).toEqual(0);
    });
    
  });
});
