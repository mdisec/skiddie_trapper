skiddie_trapper v.1.0.0
===============

It's a javascript project to set up trap for people who want to find web vulnerability. 

HOW IT WORKS
===============

skiddie_trapper is a jquery library to set up trap for script kiddies or automated vulnerability scanners.

Main idea is append random hidden input field to HTML Forms via jquery. When form request comes to the server, you can check out each trap input value is correct or not. When one of them changed, you can be sure about that request's owner is trying to find vulnerability with tampering http request with Burp etc OR Netsparker or something else has been scanning your application.

TECHNICAL DETAILS
===============
skiddie_trapper is using 1.11.0 version of jquery for inject input field to set up trap. skiddie_trapper is using "skiddie" as a flag to inject input field to form. So you have to use class="skiddie" at inside of the form.

You can expand input name and value array with something else. Default fields data has been decided for interesting name and value to attract hacker's attention. 

IMPORTANT: Be sure any of skiddie_trapper input name is not conflict with your application's current input field's name.

DEMO
===============
Simple PHP implementation can be found under the demo folder. 


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/mmetince/skiddie_trapper/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

