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

    spyOn(Window, 'swap').and.callThrough();
    const output = Window.swap(2, 4, [4, 2], 0);

    it('tracks that swap was called', function() {
      expect(Window.swap).toHaveBeenCalled();
    });

    it('when called returns swapped value', function() {
      expect(output.toEqual([2, 4]));
    });
  });
});
