//Add in your database secret
var secret = '<DATABASE_SECRET>'

function getFirebaseUrl(jsonPath) {
  return (
    '<DATABASE_URL>' +
    jsonPath +
    '.json?auth=' +
    secret
  )
}

function syncMasterSheet(excelData) {
var options = {
    method: 'put',
    contentType: 'application/json',
    payload: JSON.stringify(excelData)
  }
  var fireBaseUrl = getFirebaseUrl('masterSheet')


  UrlFetchApp.fetch(fireBaseUrl, options)
}

function startSync() {
  var sheet = SpreadsheetApp.getActiveSheet()
  var [rows, columns] = [sheet.getLastRow(), sheet.getLastColumn()]
  var data = sheet.getRange(1, 1, rows, columns).getValues()

  syncMasterSheet(data)
}
function onEdit(e){
  startSync()
}