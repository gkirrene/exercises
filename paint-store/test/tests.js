import test from 'tape';
import fs from 'fs';
import { PaintStore } from '../src/paint-store';

var paintStore = PaintStore(JSON.parse(fs.readFileSync("./test/colors.json")));

test('paintStore.colors.count() should return 140', (assert) => {
    assert.equal(paintStore.colors.count(), 140);
    assert.end();
});