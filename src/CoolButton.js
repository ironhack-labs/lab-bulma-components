import React from 'react';

class CoolButton extends React.Component{
  //Transforms the class names into the appropiate format
  convertClass(str){
    let newStr=str.split('').reduce((acc, letter)=>{return letter.match(/[A-Z]/) ? acc+`-${letter.toLowerCase()}`:acc+letter}, '')
    return newStr
  }
  //Creates a list with all the classes
  makeClassList(){
    let classes=['button']
    if (this.props.className) classes.push(...this.props.className.split(' '))
    for (let element in this.props){
      if (element.match(/^is[A-Z]/)) classes.push(this.convertClass(element))
    }
    return classes.join(' ')
  }
  render(){    
    return <button type={this.props.type} className={this.makeClassList()}>{this.props.children}</button>
  }
}

export default CoolButton