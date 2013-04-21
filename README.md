README
===

This is a private use wiki that design for users that want free wiki host. We thanks Github that provide the free Github Page service. Everyone who want to build a wiki, that can clone this project and follow the steps to build your own wiki. The wiki using GitHub md file markdown format to write your pages. You can just follow the GitHub format, and the page can show. (Almost the popular tag...)

Thanks the [marked.js](https://github.com/chjj/marked) that provide the fancy way to translate markdown to html, the core tech to translate markdown is marked.js.

## Usage:

### Clone wikitpage

```
git clone git@github.com:peihsinsu/wikitpage.git [YOUR PROJECT NAME]
```

### Config github repository

Go to your project and open the $project/wikitpage.js and edit the content follow the description:

```
var config={
  user:'peihsinsu', //The github owner or group name, that will use for build edit link
  project:'wikitpage', //The github project name, that will use for build edit link
  md_file_path: '../mdfiles', //The md file folder that for read md file use
  welcome_page: 'Main.md', //The welcome page, default location that access from root url
  menu_page: 'Menu.md' //The menu page, that shows in the left of the page
};
```

### 