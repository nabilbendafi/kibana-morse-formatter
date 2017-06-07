module.exports = function (kibana) {
  return new kibana.Plugin({
    name: 'kibana-morse-formatter',
    require: ['kibana'],
    uiExports: {
      fieldFormats: ['plugins/kibana-morse-formatter/morse-formatter']
    }
  });
};
