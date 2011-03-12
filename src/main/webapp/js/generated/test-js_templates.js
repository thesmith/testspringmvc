// This file was automatically generated from test-js.soy.
// Please don't edit this file by hand.

goog.provide('beige.templates.test');

goog.require('soy');
goog.require('soy.StringBuilder');
goog.require('beige.templates.layout');


/**
 * @param {Object.<string, *>=} opt_data
 * @param {soy.StringBuilder=} opt_sb
 * @return {string|undefined}
 * @notypecheck
 */
beige.templates.test.test = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  beige.templates.layout.header(null, output);
  output.append('<p>This is a spring test</p>');
  beige.templates.layout.footer(null, output);
  if (!opt_sb) return output.toString();
};
