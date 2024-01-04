import { test } from '@jest/globals';

test('uses only DOM types', () => {
    const timeout: number = setTimeout(() => {}, 0);
    clearTimeout(timeout)
})
