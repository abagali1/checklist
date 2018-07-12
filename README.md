# Firebase Checklist

## Firebase Setup
1. Create a new firebase project in the firebase console
2. Create a Realtime Database, read = true, write = true
3. Go to Settings>Service Accounts>Database Secret and create a new database secret
4. Remember database secret for spreadsheet setup

## Sheets Setup
1. Create new google sheets spreadsheet
2. Open script editor from tools>script editor
3. Fill in firebase information in <code>script.gs</code>
4. Paste code from <code>script.gs</code> into editor
5. Save script
6. Run function inside editor, make sure to approve permissions
7. Go back to spreadsheet, enter data
8. Insert a shape(circle, rectangle, etc.) and assign function <code>startSync</code> to the shape
9. Click shape to sync spreadsheet to firebase database

## Editing Data
1. Open spreadsheet
2. Add/delete/edit data
3. Click sync shape to sync spreadsheet to database

## Important
* Make sure that firbase config data in <code>script.js</code> is edited for your database
* Keep Database SECRET SECRET
* Keep firebase config data secure(or anyone can access your data)