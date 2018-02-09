The @fortawesome/fontawesome package contains all the functionality for generating icons but none of the content.

The icons are located in individual packages inside fontawesome-meinestadt (We need to fill this with life => our own icons) 
For that we use jsSvgsGenerator

jsSvgsGenerator generates jsSvgs using an empty Template, then packs the library inside fontawesome-meinestadt.
A gulp webbpack task then executes index.js which generates the file (function + icons) that we want to concatenate in the app js.
This files looks for i tags and replaces svgs with inlinesvgs.


Asynchronous Loading Indicators: (Prevent Layout Shifting while Loading)
https://fontawesome.com/how-to-use/performance-and-security#async-loading-indicators

Todos:
