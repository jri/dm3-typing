
DeepaMehta 3 Typing Plugin
==========================

Adds a "By Type" search mode.  
More to come.


Requirements
------------

* A DeepaMehta 3 installation  
  <http://github.com/jri/deepamehta3>


Installation
------------

1.  Go to your DeepaMehta 3 installation directory:
        cd deepamehta3

2.  Download DeepaMehta 3 Typing Plugin:
        couchapp vendor install git://github.com/jri/dm3-typing.git

3.  Activate plugin by adding a line to DeepaMehta's `_attachments/javascript/plugins.js`:
        add_plugin("vendor/dm3-typing/script/dm3_typing.js")

4.  Upload changes to CouchDB:
        couchapp push http://localhost:5984/deepamehta3-db


Usage
-----

1.  Visit DeepaMehta 3 in your webbrowser (resp. press reload):
        http://localhost:5984/deepamehta3-db/_design/deepamehta3/index.html

2.  You'll find an additional search mode "By Type" in the upper left corner.  


------------
Jörg Richter  
Dec 1, 2009