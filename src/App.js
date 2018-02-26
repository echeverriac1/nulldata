import React, {Component} from 'react';
import { Router as ReactRouter, Route, IndexRoute, browserHistory } from 'react-router';
import Main from './component/main';
import List from './component/list';
import Form from './component/form';

class App extends Component {
  render() {
    return (
      <ReactRouter history={browserHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={List} />
          <Route path="/form" component={Form} />
        </Route>
      </ReactRouter>
    );
  }
}

export default App;
