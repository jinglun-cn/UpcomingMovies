import React from 'react';
import {Link} from 'react-router-dom';


export default class Footer extends React.Component {
  render() {
  
    return (
      <footer>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-5'>
              <h3 className='lead'><strong>Information</strong> and <strong>Source</strong></h3>
              <p>Powered by <strong>Node.js</strong>, <strong>React</strong> and <strong>MongoDB Atlas</strong> with  server-side rendering.</p>
              <p>You may view the <a href='https://github.com/'>Source Code</a> behind this project on GitHub.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
