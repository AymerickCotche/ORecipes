import reducer from 'src/reducers/recipes';

describe('Test recipes reducers', () => {
  describe('structure', () => {
    test('should be a function', () => {
      expect(typeof reducer()).toBe('object');
    });
  })
})