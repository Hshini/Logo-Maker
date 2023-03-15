//Dependencies
const { Triangle, Circle, Square } = require('./Lib/shapes')
const inquirer = require('inquirer')
const fs = require('fs')

// Create File
function createFile(data) {
  fs.writeFile('./examples/file.svg', data, (error) => {
    if (error) {
      console.log(error)
    }

    console.log("File created succesfuly");
  })
}
// User Input
inquirer
  .prompt([
    {
      type: "input",
      message: "Enter  three characters for your  logo?",
      name: "title"
    },
    {
      type: "input",
      message: "Enter text color?",
      name: "textColor"
    },
    {
      type: "list",
      message: "Chose the shape?",
      choices: ['Triangle', 'Circle', 'Square'],
      name: "shape"
    },
    {
      type: "input",
      message: "Enter shape color?",
      name: "shapeColor"
    }
  ])
  .then((answers) => {
    const { title, textColor, shape, shapeColor } = answers;
    console.log(answers)
    let triangle,circle,square,userInp;

    if (shape == 'Triangle') {
      triangle = new Triangle(title, textColor, shapeColor);
      userInp=triangle.render();
      createFile(userInp)
    }

    if (shape == 'Circle') {
      circle = new Circle(title, textColor, shapeColor)
      userInp = circle.render();
      createFile(userInp);
    }

    if (shape == 'Square') {
      square = new Square(title, textColor, shapeColor)
      userInp = square.render();
      createFile(userInp);
    }
  })
  .catch((error) => {

    console.log(error)
  });



