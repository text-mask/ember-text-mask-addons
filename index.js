/* jshint node: true */
'use strict';

var path = require('path');
var mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-text-mask-addons',

  treeForAddon: function(tree) {
    var textMaskAddonsPath = path.dirname(require.resolve('text-mask-addons/dist/emailMask.js'));
    var textMaskAddonsTree = this.treeGenerator(textMaskAddonsPath);

    var trees = mergeTrees([textMaskAddonsTree, tree], {
      overwrite: true
    });

    return this._super.treeForAddon.call(this, trees);
  }
};
