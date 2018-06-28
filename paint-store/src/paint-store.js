'use strict';
var PaintStore = (colors = []) => {

    return {
        colors: {
            count:  () => console.log('count'),
            categories:  () => console.log('categories'),            
            names:  () => console.log('names'),
            find:   (color) => console.log('find' + color),
            add:    (color) => console.log('add' + color),
            update: (color) => console.log('update' + color),
            remove: (color) => console.log('remove' + color)
        }
    };
};

export { PaintStore };