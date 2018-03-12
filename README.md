#Awesome Svgs
Transform Svgs into Javascript Svgs.

# Features:

* Put Svgs in the Svgs folder and watch them magically convert to Javascript

### Tech

Dillinger uses a number of open source projects to work properly:

* [node.js] - evented I/O for the backend
* [FontAwesome] -
* [Gulp] - the streaming build system

The @fortawesome/fontawesome package contains all the functionality for generating icons but none of the content.

Libraries are stored in their own folders. This is where the javascript Svgs are located. 
Each library has an index.js with all the javascript Svgs that belong to the library.

Currently they do not support generating our own jsSvgs automatically.
So we need to generate our own Library Folder with an index.js that FontAwesome base can parse to create the file that we have to put in our app.js.
This files looks for i tags and replaces svgs with inlinesvgs.

Utils:
jsSvgsGenerator has the functionality to read a folder of Svgs, generate Javascript Svgs and create a LibraryFolder and a Library of Icons in a format that the Fontawesome Base Function can understand.

GenerateLibrary imports jsSvgsGenerator and generates a Folder for our library (fontawesome-meinestadt) and an index.js. 

The Library is ready. Now we need to generate the File with all the functionality and all the icons that will be served to our app.  

For this a Gulp task uses webbpack to parse index.js and generates the file that we want to concatenate in the app js.


Asynchronous Loading Indicators: (Prevent Layout Shifting while Loading)
https://fontawesome.com/how-to-use/performance-and-security#async-loading-indicators

Todos:
Test: Generate html site with all generated Svgs automatically
Add Options:
Normalize Svgs
Read and resize Viewboxes


