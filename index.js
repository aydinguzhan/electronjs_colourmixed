const electron = require("electron");
const url =require("url");
const path = require("path");

// import lib.

const { app ,BrowserWindow, Menu ,ipcMain} = electron;

let mainWindow ;

//ready app| start
app.on("ready",()=>{
    mainWindow = new BrowserWindow({
        width:800,
        height:800
        });



    //load html file
    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname,"main.html"),
            protocol:"file",
            slashes: true
        })
    );
const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
Menu.setApplicationMenu(mainMenu);


// close window

mainWindow.on('close',()=>{
    app.quit;
})

});

const mainMenuTemplate =[
    {
        label :"Çıkış",
        role:"quit"
    }
]

