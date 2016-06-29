/* eslint-env mocha */
import { assert } from 'chai';
import lib from './index';

describe('index.js', () => {
  it('should export a function', () => {
    assert.strictEqual(lib(), 'hello', 'should return hello');
  });
});
