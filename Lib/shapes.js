
class Shapes {
    constructor(title,textColor,shapeColor){
    this.title=title;
    this.textColor=textColor;
    this.shapeColor=shapeColor;
    }
   
}
class Triangle extends Shapes {

    constructor(title,textColor,shapeColor){
    super(title,textColor,shapeColor)

    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.title}</text>
      
      </svg>`
    }
}

class  Circle extends Shapes{
    constructor(title,textColor,shapeColor){
    super(title,textColor,shapeColor)


    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.title}</text>
      
      </svg>`
    
}
}

class Square extends Shapes{
    constructor(title,textColor,shapeColor){
    super(title,textColor,shapeColor)


    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect x="93" y="60" width="110" height="110"  fill="${this.shapeColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.title}</text>
      
      </svg>`
    }
}



module.exports={Triangle,Circle,Square};
