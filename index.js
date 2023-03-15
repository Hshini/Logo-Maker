//Dependencies
const { Triangle, Circle, Square } = require('./Lib/shapes')
const inquirer = require('inquirer')
const fs = require('fs')

function createFile() {

}
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
    let triangle,circle,square;
    if (shape == 'Triangle') {
      triangle = new Triangle(title, textColor, shapeColor);

      fs.writeFile('file.svg', triangle.render(), (error) => {
        if (error) {
          console.log(error)
        }

        console.log("File created succesfuly");
      })
    }

    if (shape == 'Circle') {
       circle = new Circle(title, textColor, shapeColor)

      fs.writeFile('file.svg', circle.render(), (error) => {
        if (error) {
          console.log(error)
        }

        console.log("File created succesfuly");
      })
    }

    if (shape == 'Square') {
       square = new Square(title, textColor, shapeColor)
      fs.writeFile('file.svg', square.render(), (error) => {
        if (error) {
          console.log(error)
        }

        console.log("File created succesfuly");
      })
    }



  })
  .catch((error) => {

    console.log(error)
  });



