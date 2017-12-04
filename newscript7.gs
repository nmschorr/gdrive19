function listGATfiles77() {
// by Nancy Schorr, 9/27/17
// result shows up in the log - select View Log in the app runner to view it
  var files = DriveApp.getFiles();   // Note: this gets *every* file in your Google Drive
  while (files.hasNext()) {
    var file = files.next();
    Logger.log("----Beginning of record-----------------------------");
    Logger.log("File Name:  " + file.getName());
    Logger.log("File ID:  " + file.getId());
    Logger.log("Owner:  " + file.getOwner());
    Logger.log("Mime Type:  " + file.getMimeType());
    Logger.log("Size in Bytes:  " + file.getSize());
    Logger.log("URL:  " + file.getUrl());
    Logger.log("Last Updated:  " + file.getLastUpdated());
    Logger.log(file.toString());
     
    Logger.log("----end of record-----------------------------");
    Logger.log(" ");
  }
  Logger.log("Done")
  //var theParents = file.getParents();   // Note: supposed to get every file in your Google Drive, not working for me
  //Logger.log(theParents.toString());    // 
}

