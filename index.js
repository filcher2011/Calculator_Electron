const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 300,
        height: 500,
        icon: path.join(__dirname, 'icon.png'),
        resizable: false
    });
    win.setMenuBarVisibility(false);
    win.setTitle("Калькулятор");
    win.loadFile('index.html');
}

app.on('ready', createWindow)
app.on('closed', () => {
    win = null;
    app.quit()
})