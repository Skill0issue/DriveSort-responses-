function onFormSubmit(e) {
  var responses = e.response.getItemResponses();
  var domainResponse = responses[k].getResponse();//kth question in form
  var partOfResponse = responses[l].getResponse();//lth question in form
  var fileId = responses[u].getResponse();//upload file question
  var parentFolderId = '';

  if (partOfResponse === 'option A') {
    parentFolderId = 'PARENT_FOLDER_ID';//Folder Id for Option A
  } else if (partOfResponse === 'option B') {
    var folderNameMapping = {
      'option 1': 'OPTION1_FOLDER_ID',
      'option 2': 'OPTION2_FOLDER_ID',
      'option 3': 'OPTION3_FOLDER_ID',
      //Add all the options and their folder IDs'
    };

    parentFolderId = folderNameMapping[domainResponse];
  }
  if (parentFolderId) {
    var file = DriveApp.getFileById(fileId);
    var folder = DriveApp.getFolderById(parentFolderId);
    folder.addFile(file);
    var mainFolder = DriveApp.getFolderById('LANDING_FOLDER_ID');//main folder ID
    mainFolder.removeFile(file);
  }
}
