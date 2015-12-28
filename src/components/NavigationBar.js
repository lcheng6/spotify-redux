import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import Router from 'react-router';
import history from '../constants/History';

export default class NavigationBar extends Component {

  /*
  * The constructor binds the custom methods to the Component so that they get called as soon as they are triggered.
  * Otherwise, the method won't get called and a generic method will be called instead.
  * Although the React community recommends to modify a Component's state by using the 'setState' built-in method, it
  * is okay to define an initial state in the constructor as done here.
  * Of course, do not forget to call the parent Component constructor via 'super'.
  * */
  constructor(props) {
    super(props);
    this.setActive = this.setActive.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      active: 0
    }
  }

  /*
  * Change the 'active' attribute of this Component state so that the tabs in the right-most navbar become active or
  * highlighted.
  * */
  setActive(key) {
    this.setState({active: key || 0});
  };

  /*
  * Given a key coming from a navbar pill, change the application route path and set the active state of the navbar
  * pill that was selected. This method could be nicer in terms of code but works for now. The 'path' variable may not
  * be necessary as the React Router provides a default route to fallback to in case no route matches.
  *
  * WARNING: for some reason, when navigating from scratch (that is, enter /, then click on 'Songs' or 'Albums') the
  * application redirects to /songs, /albums or /artists, rendering the correct component. However, when accessing
  * directly from the browser the path /songs, the browser yields a 'Cannot GET /songs'. This may have something to do
  * with the React-Router hash vs history routing.
  * */
  handleSelect(selectedKey) {
    let path = '/';
    console.log('Selected', selectedKey, this.state);
    this.setActive(selectedKey);
    switch (selectedKey) {
      case 1:
        history.replaceState(null, 'artists');
        break;
      case 2:
        history.replaceState(null, 'albums');
        break;
      case 3:
        history.replaceState(null, 'songs');
        break;
    }
  }

  /*
   * Note the 'activeKey' attribute of the Nav compound: it reads from the Component's 'active' field. The active key is matched against
   * the NavItems 'eventKey' values: whenever there is a match, the NavItem becomes active or highlighted via CSS
   * */
  render() {
    return (
      <Navbar fixedTop inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Spotify-Redux</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1}><span>A React-redux Spotify feed panel</span></NavItem>
        </Nav>

        <Nav bsStyle="pills" pullRight className="navbar-nav" activeKey={this.state.active} onSelect={this.handleSelect}>
          <NavItem eventKey={1}>Artists</NavItem>
          <NavItem eventKey={2}>Albums</NavItem>
          <NavItem eventKey={3}>Songs</NavItem>
        </Nav>
      </Navbar>
    );
  }
}