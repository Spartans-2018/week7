import React, {Component} from 'react';
import './App.css';
import Person from './components/Person';

class App extends Component {

    state = {
        persons: [
            {name: 'Boyan', age: 27},
            {name: 'Som', age: 20},
            {name: 'Nikhil', age: 26}
        ],
        cohortName: 'Spartans - Part Time'
    };

    nameChangeHandler() {
        this.setState({
            persons: [
                {name: 'Boyan', age: 27},
                {name: 'Som', age: 20},
                {name: 'Akmal', age: 28},
                {name: 'Nikhil', age: 26}
            ],
            cohortName: 'Spartans - Part Time'
        });

        console.log("Button change handler");
    }


    render() {
        console.log("Calling render...");

        return (
            <div className="App">
                <h2>My New React App</h2>

                <div>{this.state.cohortName}</div>

                <button onClick={() => this.nameChangeHandler()}
                        value="Validate">Validate
                </button>

                {
                    this.state.persons.map((p, i) => {
                        return <Person key={i} name={p.name} age={p.age}/>
                    })
                }
            </div>
        );
    }
}

export default App;
