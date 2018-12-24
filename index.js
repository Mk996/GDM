const electron = require('electron')
const {app, BrowserWindow} = electron
require('electron-reload')(__dirname)

app.on('ready' , () =>{
    let win = new BrowserWindow({
        frame: false,
        autoHideMenuBar: true,
        width: 500,
        height: 300
    })

    win.setResizable(false)
    win.loadURL(`file://${__dirname}/index.html`)

})