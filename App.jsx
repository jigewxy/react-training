import React from 'react';
import {Button, ButtonToolbar, Jumbotron, Label,Row, Col} from 'react-bootstrap';

const mystyle ={
  position:"absolute",
  top: "10pt",
  right:"5pt"
}

class App extends React.Component {

   constructor(props) {
    super(props);

    this.state ={
        title: "Feburery Study Plan",
        days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        subjects: ["Java", "React", "Java", "React", "Java", "AWS lambda", "Summary"]
    };


   } 

   render() {
      return (
         <div>
            <Header/>
            <Content tableContent = {this.state}/>
         </div>
      );
   }
}

class Content extends React.component {

    render(){
        return (

            <div>
             <Col md={6}>
                <Col md={1}>
                {this.props.title}
                </Col>
              <Table stripped hover condensed bordered> 
                  <thead>
                  {this.props.days.map((index,i)=><td>{index}</td>)} 
                  </thead>
                  <tbody>
                    <tr>
                  {this.props.subjects.map((index,i)=><td>{index}</td>)} 
                    </tr>
                  </tbody>
             </Table>    

            </Col>
            </div>

        );
    }


}

class Header extends React.Component {
    render() {
       return (
          <div>
            <Jumbotron>
                <Row className="row-jumbo" style={mystyle}>
                    <Col md={1}>
                    <h1><Label bsStyle="primary">Code </Label></h1> 
                    </Col>
                    <Col md={1} mdOffset={3}>
                    <h1><Label bsStyle="success">Eat </Label></h1> 
                    </Col>
                    <Col md={1} mdOffset={2}>
                    <h1><Label bsStyle="default">Sleep </Label></h1> 
                    </Col>
                 </Row>
                 <br/>
                <Subs/>
            </Jumbotron>
          </div>
       );
    }
 }

class Subs extends React.Component {
   render() {
      return (
           <ButtonToolbar>
               
                {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
                <Button bsStyle="primary" bsClass="btn-outline">Angular</Button>

                {/* Indicates a successful or positive action */}
                <Button bsStyle="success" bsClass="btn-outline">React</Button>

                {/* Contextual button for informational alert messages */}
                <Button bsStyle="info" bsClass="btn-outline">Node.js</Button>

                {/* Indicates caution should be taken with this action */}
                <Button bsStyle="warning" bsClass="btn-outline">Java</Button>

                {/* Indicates a dangerous or potentially negative action */}
                <Button bsStyle="danger" bsClass="btn-outline">Python</Button>

            </ButtonToolbar>
      );
   }
}
export default App;