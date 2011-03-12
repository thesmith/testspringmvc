// This file was automatically generated from layout-js.soy.
// Please don't edit this file by hand.

goog.provide('beige.templates.layout');

goog.require('soy');
goog.require('soy.StringBuilder');


/**
 * @param {Object.<string, *>=} opt_data
 * @param {soy.StringBuilder=} opt_sb
 * @return {string|undefined}
 * @notypecheck
 */
beige.templates.layout.header = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<html><head><title>test layout</title></head><body>');
  if (!opt_sb) return output.toString();
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {soy.StringBuilder=} opt_sb
 * @return {string|undefined}
 * @notypecheck
 */
beige.templates.layout.footer = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('</body></html>');
  if (!opt_sb) return output.toString();
};
