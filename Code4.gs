function findFoldersAndFiles4() {
   var mime,fid,ownr,pars,b,c, spa, folds, fpar, fold;
   var folds = DriveApp.getFolders();
   var files = DriveApp.getFiles();
    while (folds.hasNext()) {
      fold = folds.next();
            Logger.log("FOLDER: " + fold.toString() + " -------FoldParent: " + fold.getParents().next().toString() ); 
          }
       Logger.log("--------------------------------------\n\n")
  
 while (files.hasNext()) {
   var file = files.next();
   mime = file.getMimeType();
   fid - file.getId();
   ownr = file.getOwner();
   pars = file.getParents();
   spa = ", ";
   
   Logger.log(file.getName() + "  ----- type: " + mime + " fileid: " + fid + " owner: " + ownr         );
   while (pars.hasNext()) {
      Logger.log("PARENTS: " + pars.next().toString() ); 
      Logger.log("--------------------------------------\n\n")
    }
 }
 
}
