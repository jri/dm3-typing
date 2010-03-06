
DeepaMehta 3 Typing Plugin
==========================

Adds a *By Type* search mode.  


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

3.  Activate the plugin by adding one line to DeepaMehta's `_attachments/javascript/plugins.js`:
        add_plugin("vendor/dm3-typing/script/dm3_typing.js")

4.  Upload changes to CouchDB:
        couchapp push http://localhost:5984/deepamehta3-db

5.  Check if installation was successful: visit DeepaMehta 3 in your webbrowser (resp. press reload):  
    <http://localhost:5984/deepamehta3-db/_design/deepamehta3/index.html>  
    If you see the *By Type* entry in the search mode menu (center of upper toolbar) everything is OK.


Usage
-----

*   Select the *By Type* search mode, select a topic type, and press the *Search* button.  
    The resulting topics will appear at the right side.


Updating
--------

1.  Go to your DeepaMehta 3 installation directory:
        cd deepamehta3

2.  Update DeepaMehta 3 Typing Plugin:
        couchapp vendor update dm3-typing

3.  Upload changes to CouchDB:
        couchapp push http://localhost:5984/deepamehta3-db


Version History
---------------

**v0.3** -- Mar 6, 2010

* Works in conjunction with *DM3 Type Editor* plugin
* Compatible with DeepaMehta 3 v0.3

**v0.2** -- Dec 1, 2009

* Basic functionality
* Requires DeepaMehta 3 v0.2


------------
Jörg Richter  
Mar 6, 2010
