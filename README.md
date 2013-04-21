README
===

This is a private wiki with pure javascript that design for users that want free wiki host. We thanks Github that provide the free Github Page service. Everyone who want to build a wiki, that can clone this project and follow the steps to build your own wiki. The wiki using GitHub md file markdown format to write your pages. You can just follow the GitHub format, and the page can show. (Almost the popular tag...)

Thanks the [marked.js](https://github.com/chjj/marked) that provide the fancy way to translate markdown to html, the core tech to translate markdown is marked.js.

## Usage - GitHub Page Hosted:

### Step 1: Fork wikitpage 

You can fork this project [HERE](https://github.com/peihsinsu/wikitpage/fork_select). 
This repository include some default page md files, default project folders and architecture for build the framework.

* README.md: This is the file you see now.
* index.html: The enter page that you can configure a document.location javascript to redirect to the wiki page.
* wikitpage.js: The control file that specify where the md file folder, welcome page, menu page and your github information.
* mdfiles/: The default md file folder, that you can use another folder by change the wikitpage.js
* wiki/: The default wiki framework folder.

### Step 2: Enable the GitHub page

Follow the [Github Page Instruction](https://help.github.com/articles/creating-project-pages-manually) to switch to github page branch.

```

```

### Step 3: Config github repository

Go to your project and open the $project/wikitpage.js and edit the content follow the description:

```
# vi $project/wikitpage.js
var config={
  user:'peihsinsu',
  project:'wikitpage',
  md_file_path: '../mdfiles',
  welcome_page: 'Main.md',
  menu_page: 'Menu.md'
};
```

* config.user: The github owner or group name, that will use for build edit link
* config.project:The github project name, that will use for build edit link
* config.md_file_path:The md file folder that for read md file use
* config.welcome_page: The welcome page, default location that access from root url
* config.menu_page: The menu page, that shows in the left of the page

### 


## Usage - Using Other Web Server

Or you can clone this project and start by nginx, httpd, node.js or other http web server... (Descript bellow...)

```
# git clone git@github.com:peihsinsu/wikitpage.git [YOUR PROJECT NAME]
```

### Using Node.js Start WikitPage

Install [express.js](http://expressjs.com/)...

```
# cd [YOUR PROJECT NAME] && node app.js
```

### Using Nginx or HTTPD Start WikitPage

