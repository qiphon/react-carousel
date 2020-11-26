import {DVClass} from '../utils'

it('DVClass function test', () => {
  expect(DVClass(1, 2)).toEqual('1 2');
  expect(DVClass('aaa', 'bbb', 2)).toEqual('aaa bbb 2');
});