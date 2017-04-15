import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './components/home.js'

const supportsHistory = 'pushState' in window.history




const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const BasicExample = () => (
  <Router

  >
    <div>
      <div dangerouslySetInnerHTML={{__html:
          `<nav class="menu">
            <input type="checkbox" href="#" class="menu-open" name="menu-open" id="menu-open"/>
            <label class="menu-open-button" for="menu-open">
              <img src="./brain-logo-white.svg" style="width: auto; height: 100%;">
            </label>

            <a href="#" class="menu-item"> <i class="fa fa-bar-chart"></i> </a>
            <a href="#" class="menu-item"> <i class="fa fa-plus"></i> </a>
            <a href="/topics" class="menu-item"> <i class="fa fa-heart"></i> </a>
            <a href="#" class="menu-item"> <i class="fa fa-envelope"></i> </a>
            <a href="/" class="menu-item"> <i class="fa fa-cog"></i> </a>

          </nav>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
              <defs>
                <filter id="shadowed-goo">

                    <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                    <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
                    <feColorMatrix in="shadow" mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2" result="shadow" />
                    <feOffset in="shadow" dx="1" dy="1" result="shadow" />
                    <feBlend in2="shadow" in="goo" result="goo" />
                    <feBlend in2="goo" in="SourceGraphic" result="mix" />
                </filter>
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                    <feBlend in2="goo" in="SourceGraphic" result="mix" />
                </filter>
              </defs>
          </svg>`
          }}>

      </div>
      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
  </div>

  </Router>
)
export default BasicExample
