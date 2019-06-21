# Morse code FieldFormat Plugin for Kibana 5 

### About
This is a plugin for Kibana 5+. Has been developed and tested on Kibana 5.2.0 version. The plugin uses [morse](https://github.com/ecto/morse)

![Screenshot](https://raw.githubusercontent.com/nabilbendafi/kibana-morse-formatter/master/images/morse.jpg)

Actually, this is not really a helpful plugin. But, who cares !

### Usage
Installation steps:
```
$ cd KIBANA_HOME/plugins
$ git clone https://github.com/nabilbendafi/kibana-morse-formatter.git kibana-morse-formatter
$ cd kibana-morse-formatter
$ npm install
```
or 
```
$ bin/kibana-plugin install https://github.com/nabilbendafi/kibana-morse-formatter/releases/download/v0.0.2/kibana-morse-formatter-0.0.2.zip
```

Unistall:
```
$ bin/kibana-plugin remove kibana-morse-formatter
```

### Configure
Under _Management_ > _Index Patterns_:
 * Update *Format* type to *Morse Code* for any String type field

### Screenshots
![Screenshot](https://raw.githubusercontent.com/nabilbendafi/kibana-morse-formatter/master/images/configuration.jpg)
![Screenshot](https://raw.githubusercontent.com/nabilbendafi/kibana-morse-formatter/master/images/index_pattern.jpg)

### Contributions
Anyone is welcome to contribute to my project. There are various ways you can contribute:

1. Open an [Issue](https://github.com/nabilbendafi/kibana-morse-formatter/issues) on GitHub
2. Send me a Pull Request with your bug fixes and/or new features
3. Contact via email: **nabil@bendafi.fr**
