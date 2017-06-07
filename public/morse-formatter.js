function MorseProvider(Private) {

  var _ = require('lodash');
  var morse = require('morse');
  var FieldFormat = Private(require('ui/index_patterns/_field_format/field_format'));

  // Create a new FieldFormat type and inherit FieldFormat
  _.class(Morse).inherits(FieldFormat);
  function Morse(params) {
    Morse.Super.call(this, params);
  }

  // The id of this field format
  Morse.id = 'country';
  // The title of the field format, shown to the user
  Morse.title = 'Morse Code';
  // An array of types, which this field formatter can be used for.
  // You can only apply this field formatter to fields, that have one
  // of the here specified types. Possible types are:
  // number, boolean, date, ip, attachment, geo_point, geo_shape, string, murmur3
  // murmur3 (Murmur3 plugin hashes), unknown (unknown field type),
  // conflict (fields that have different types in different indices matched by the index pattern)
  Morse.fieldType = [
    'string',
  ];

  /*
    Will be used to render the field with this formatter.
    If you specify a function, the return value will be rendered (without interpreting HTML in it).
    If you specify an object, you can have a key html and a key text with a function as
    a value. The text function works as if you would have specified only a function. The return value
    of the function you applied to the html key, will be interpreted as HTML (as seen below).
    The first argument to the function will be the value that should be rendered.
    The second argument will be the field, that should be rendered.
      The object contains information like the type (`field.type`), that you might want to use
      if you want to render differently depending on the field's type.
      This can also be undefined, e.g. when formatting the field in a visualization due to the aggregation
      this information is lost.
  */
  Morse.prototype._convert = {
    text: function (value) {
      return value;
    },
    html: function (value) {
      var encoded = morse.encode(value);
      var html = '<span>' + encoded + '</span>';
      return html;
    }
  };

  return Morse;
}

// Register the provider to the field_formats registry
require('ui/registry/field_formats').register(MorseProvider);
