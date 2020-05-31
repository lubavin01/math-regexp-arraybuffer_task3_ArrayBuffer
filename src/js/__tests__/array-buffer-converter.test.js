import ArrayBufferConverter from '../array-buffer-converter';

test('1', () => {
  const buffer = new ArrayBufferConverter();
  buffer.load();

  expect(buffer.buffer).toBeDefined();

  expect(buffer.toString()).toBeDefined();
});
