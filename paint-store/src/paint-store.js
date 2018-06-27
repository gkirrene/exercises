'use strict'
var PaintStore = (paints = []) => {

    var paints = paints;

    return {
        colors: {
            find:   (color) => console.log('find'),
            names:  () => console.log('names'),
            count:  () => console.log('count'),
            add:    (color) => console.log('add'),
            update: (color) => console.log('update'),
            remove: (color) => console.log('remove')
        }
    };
};

export { PaintStore }