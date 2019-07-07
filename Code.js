function onOpen() {
  var ui = SpreadsheetApp.getUi();
  var menu = ui.createMenu('追加したメニュー');
  menu.addItem('テストスクリプト実行', 'myFunction');
  menu.addToUi();
}

function myFunction() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var rowNum = sheet.getActiveCell().getRow();
  Logger.log(rowNum);
}
