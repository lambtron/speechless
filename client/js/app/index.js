/** @jsx dom */

/**
 * Module dependencies.
 */

import {component,dom} from '../lib/deku/index.js';

/**
 * Constants.
 */

const request = require('superagent');

/**
 * Define `App`.
 */

var App = component();

/**
 * Export `App`.
 */

export default App;

/**
 * After mount.
 */

App.prototype.afterMount = function(el, props, state) {
  var setState = this.setState.bind(this);
  var url = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC';

  request
    .get(url)
    .end(function(err, res) {
      setState({ imgUrl: res.body.data.image_original_url });
  });
};

/**
 * Render `App`.
 */

App.prototype.render = function(props, state) {
  var imgUrl = state.imgUrl || '';

  function newSlide() {
    console.log('hello');
    location.reload();
  }

  return (
    <div onKeyUp={newSlide}>
      <img src={imgUrl} style='width: 100%; height: 100%' />
    </div>
  );
};
