import test from 'tape';

test('A passing test', (assert) => {
    assert.pass('Pass');
    assert.end();
});

test('A failing test', (assert) => {
    assert.equal(1, 0, '');
    assert.end();
});