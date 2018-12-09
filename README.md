# Make Room for rstudio-server web interface
Assuming source code is being displayed on the top-right panel, this extension will maximize the vertical space for source code.

 - removes bottom right panel
 - removes logo
 - merges top two rows of menus into one
 - assumes rstudio-server is on port 8787
 - I have only tested on RStudio Preview version 1.2.1181
 
### Installation and usage: 
 - download and extract zip 
 - in Chrome, navigate to chrome://extensions
 - select *Load unpacked*, then choose the extracted folder
 - navigate to rstudio-server page and login
 - **drag center panels separator** (this is what activates the script)
 - if the top-right panel gets resized again by rstudio, drag the center panels separator again.

### Before:
<a href="https://github.com/mkln/rstudio-server_make_room/raw/master/before.png"><img src="https://github.com/mkln/rstudio-server_make_room/raw/master/before.png" align="center" height="500"></a> <br>

### After:
<a href="https://github.com/mkln/rstudio-server_make_room/raw/master/after.png"><img src="https://github.com/mkln/rstudio-server_make_room/raw/master/after.png" align="center" height="500"></a>
