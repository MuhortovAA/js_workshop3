const url = require('url').format({
    protocol: 'file',
    slashes: true,
    pathname: require('path').join(__dirname, 'index.html')
});
const electron = require('electron');
const {
    app,
    BrowserWindow
} = electron;
let win;
function createWindow(){
    win=new BrowserWindow({
        width:500,
        heght:850
    });

    win.loadURL(url);
    win.on('closed', function(){
        win=null;
    });
};
app.on('ready', createWindow);
