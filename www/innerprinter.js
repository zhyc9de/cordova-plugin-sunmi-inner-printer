exec = require('cordova/exec');

module.exports = {

  printerInit() {
    return new Promise((resolve, reject) => {
      exec(resolve, reject, "Printer", arguments.callee.name, []);
    })
  },
  printerSelfChecking() {
    return new Promise((resolve, reject) => {
      exec(resolve, reject, "Printer", arguments.callee.name, []);
    })
  },
  getPrinterSerialNo() {
    return new Promise((resolve, reject) => {
      exec(resolve, reject, "Printer", arguments.callee.name, []);
    })
  },
  getPrinterVersion() {
    return new Promise((resolve, reject) => {
      exec(resolve, reject, "Printer", arguments.callee.name, []);
    })
  },
  hasPrinter() {
    return new Promise((resolve, reject) => {
      exec(resolve, reject, "Printer", arguments.callee.name, []);
    })
  },
  getPrintedLength() {
    return new Promise((resolve, reject) => {
      exec(resolve, reject, "Printer", arguments.callee.name, []);
    })
  },
  lineWrap(count) {
    return new Promise((resolve, reject) => {
      exec(resolve, reject, "Printer", arguments.callee.name, [...arguments]);
    })
  },
  sendRAWData(base64Data) {
    return new Promise((resolve, reject) => {
      exec(resolve, reject, "Printer", arguments.callee.name, [...arguments]);
    })
  },
  setAlignment(alignment) {
    return new Promise((resolve, reject) => {
      exec(resolve, reject, "Printer", arguments.callee.name, [...arguments]);
    })
  },
  setFontName(typeface) {
    return new Promise((resolve, reject) => {
      exec(resolve, reject, "Printer", arguments.callee.name, [...arguments]);
    })
  },
  setFontSize(fontSize) {
    return new Promise((resolve, reject) => {
      exec(resolve, reject, "Printer", arguments.callee.name, [...arguments]);
    })
  },
  printText(text) {
    return new Promise((resolve, reject) => {
      exec(resolve, reject, "Printer", arguments.callee.name, [...arguments]);
    })
  },
  printTextWithFont(text, typeface, fontSize) {
    return new Promise((resolve, reject) => {
      exec(resolve, reject, "Printer", arguments.callee.name, [...arguments]);
    })
  },
  printColumnsText(colsTextArr, colsWidthArr, colsAlign) {
    return new Promise((resolve, reject) => {
      exec(resolve, reject, "Printer", arguments.callee.name, [...arguments]);
    })
  },
  printColumnsString(colsTextArr, colsWidthArr, colsAlign) {
    return new Promise((resolve, reject) => {
      exec(resolve, reject, "Printer", arguments.callee.name, [...arguments]);
    })
  },
  printBitmap(base64Data, width, height) {
    return new Promise((resolve, reject) => {
      exec(resolve, reject, "Printer", arguments.callee.name, [...arguments]);
    })
  },
  printBarCode(barCodeData, symbology, width, height, textPosition) {
    return new Promise((resolve, reject) => {
      exec(resolve, reject, "Printer", arguments.callee.name, [...arguments]);
    })
  },
  printQRCode(qrCodeData, moduleSize, errorLevel) {
    return new Promise((resolve, reject) => {
      exec(resolve, reject, "Printer", arguments.callee.name, [...arguments]);
    })
  },
  printOriginalText(text) {
    return new Promise((resolve, reject) => {
      exec(resolve, reject, "Printer", arguments.callee.name, [...arguments]);
    })
  },
  cutPaper() {
    return new Promise((resolve, reject) => {
      exec(resolve, reject, "Printer", arguments.callee.name, [...arguments]);
    })
  },

}
