function findFoldersAndFiles() {
	var mime, fid, ownr, pars, b, c, spa, folds, fpar, fold, url;
	var folds = DriveApp.getFolders();
	var files = DriveApp.getFiles();
	while (folds.hasNext()) {
		fold = folds.next();
		Logger.log("FOLDER: " + fold.toString() + " -------FoldParent: " + fold.getParents().next().toString());
	}
	Logger.log("--------------------------------------\n\n")

	while (files.hasNext()) {
		var file = files.next();
		mime = file.getMimeType();
		fid - file.getId();
		url - file.getUrl();

		ownr = file.getOwner();
		pars = file.getParents();
		spa = ", ";

		Logger.log(file.getName() + "  ----- type: " + mime + " ------url: " + url + " -----owner: " + ownr);
		while (pars.hasNext()) {
			Logger.log("PARENTS: " + pars.next().toString());
			Logger.log("--------------------------------------\n\n")
		}
	}

}

function emailLog() {
	var files = [];
	files = DriveApp.getFiles();
	while (files.hasNext()) {
		Logger.log(files.next().getName());
	}
	var recipient = Session.getActiveUser().getEmail();
	var subject = 'A list of files in your Google Drive';
	var body = Logger.getLog();
	MailApp.sendEmail(recipient, subject, body);
}