'use strict';
var PaintStore = (colors = []) => {

    return {
        colors: {
            find:   (color) => console.log('find' + color),
            categories:  () => console.log('categories'),            
            names:  () => console.log('names'),
            count:  () => console.log('count'),
            add:    (color) => console.log('add' + color),
            update: (color) => console.log('update' + color),
            remove: (color) => console.log('remove' + color)
        }
    };
};

export { PaintStore };