// Quiz
const prop = {
  name: 'Button',
  styles: {
    size: 20,
    color: 'black',
  },
};

function changeColor({styles, styles:{size, color}}) {
  console.log(styles);
  console.log(size);
  console.log(color);
}

changeColor(prop);