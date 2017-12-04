function makeObj() {

	myArray = ["first", "second"]

	var myObj = {
		yes: "positive",
		no: myArray
	}

	var answer = myObj.yes;
	Logger.log(myObj.no[0]);

}

function getAll() {
	var folder = DriveApp.getRootFolder();
	var mylist = [];
	var files = DriveApp.getFiles()
	//var files = folder.getFiles();
	while (files.hasNext()) {
		var file = files.next();
		var parents = file.getParents();
		var owner = file.getOwner();
		var access = file.getSharingAccess();
		var perms = file.getSharingPermission();
		var fid = file.getId();
		while (parents.hasNext()) {
			myvar = parents.next();
			mylist.push(myvar);
		}
		// Logger.log(file.getName() + " **Parent: " + mylist);
		Logger.log(file.getName() + " perms: " + perms + " access: " + access + " **Parent: " + mylist);
		mylist = [];
	}
}