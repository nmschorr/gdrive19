// see  https://ctrlq.org/code/20504-update-google-sheet-cell-values
// https://developers.google.com/apps-script/reference/drive/folder
function getFiles(folder) {
	var folder = DriveApp.getRootFolder();
	var files, theFile;
	files = folder.getFiles();
	while (files.hasNext()) {
		theFile = files.next();
		Logger.log("----------------File in " + folder + ": " + theFile.getName());
	}
}


// working here:
function firstGetFolders() {
	var rootFoldItem = DriveApp.getRootFolder();
	var resultArray = [],
		ancestry;
	var rootFolder = rootFoldItem.getName();
	var parentFolderStr = '"' + rootFolder + '" ';
	var doc = DocumentApp.create('results2');
	var myid = doc.getId();
	var docopen = DocumentApp.openById(myid);
	var body = docopen.getBody();
	var text = body.editAsText();
	var finalResultArray = [];

	var theFolders = rootFoldItem.getFolders();
	while (theFolders.hasNext()) {
		var folderItem = theFolders.next();
		var folderItemStr = folderItem.toString();

		// var path = root + folderItemStr;
		var folderPath = ',"' + folderItemStr + '"';
		var ancestryString = '"' + folderPath;
		resultArray.push(ancestryString);

		finalResultArray = secondGetFolders(folderItem, ancestryString, resultArray);
	}
	var alen = finalResultArray.length;
	for (i = 0; i < alen; i++) {
		text.appendText(finalResultArray[i]);
		text.appendText("\n");
	}
}

function secondGetFolders(parentF2, ancestryP2, resultArray2) {
	var folders2nd = parentF2.getFolders();
	while (folders2nd.hasNext()) {
		var secondFolderItem = folders2nd.next();
		var f2String = secondFolderItem.toString();
		var ancestryP2new = '","' + ancestryP2 + ',"' + f2String + '"';
		Logger.log("\n\n -------ANCESTRY:   " + ancestryP2new);
		resultArray2.push(ancestryP2new);

		resultArray2 = thirdGetFolders(secondFolderItem, ancestryP2new, resultArray2);
	}
	return resultArray2;
}

function thirdGetFolders(parentF3, ancestryP3, resultArray3) {
	var thirdFolders = parentF3.getFolders();
	while (thirdFolders.hasNext()) {
		var thirdLevelFolderItem = thirdFolders.next();
		var f3String = thirdLevelFolderItem.toString();
		var ancestryP3new = '","' + ancestryP3 + ',"' + f3String + '"';

		Logger.log("\n\n -------ANCESTRY:   " + ancestryP3new);
		resultArray3.push(ancestryP3new);

		resultArray3 = secondGetFolders(thirdLevelFolderItem, ancestryP3new, resultArray3);
	}
	return resultArray3;
}