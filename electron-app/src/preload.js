const { contextBridge, ipcRenderer } = require('electron')


contextBridge.exposeInMainWorld('ipcRenderer', {
    invoke: (e, params) => ipcRenderer.invoke(e, params),
});

