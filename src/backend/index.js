import { ipcMain } from 'electron'

const pathsToRow = require('./pathsToRow')
const prepareData = require('./prepareData')
const groupWords = require('./groupWords')

ipcMain.on('getFiles', (event, paths) => {

  pathsToRow(paths)
    .then(rows => prepareData(rows))
    .then(words => groupWords(words))
    .then((groupedWords) => event.reply('getFiles', groupedWords))
})