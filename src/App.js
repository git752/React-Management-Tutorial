import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
{
  'id' : 1,
  'image' : 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Google_Lens_-_new_logo.png',
  'name' : '홍길동',
  'birthday' : '919119',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '훙길둥',
  'birthday' : '313141',
  'gender' : '남자',
  'job' : '대학생'
}
]


class App extends Component{
    render(){
      return(
        <div>
          {
            customers.map(c => {
              return(
              <Customer
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />);
            })
          }
        </div>
      );
    }
}
    


export default App;
