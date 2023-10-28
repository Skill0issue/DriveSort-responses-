# Google Apps Script File Management

This script is designed to automatically move files uploaded through a Google Form to specific folders in Google Drive based on user input. It uses Google Apps Script, a cloud-based scripting language, to interact with the Google Drive API.

## Setup
This setup is set for a form with 'l'th question with 2 options A,B and 'k'th question with n options namely 'opton 1','option 2','option 3', ... and so on. Create the Folders inside the drive and name them exactly as they were in the form. If a user choses Option A regardless of kth response he gets sorted to folder/option_A but if he chooses option B he gets put into folder/option_B/option_2 and so on. 
  
1. Create a Google Form and add the necessary fields for file uploads, along with the other required fields.
2. Open the script editor by going to "Script editor" from the "..." menu in Google Forms.
3. Replace the default code in the script editor with the provided `onFormSubmit` function.
4. Modify the script to include your specific folder IDs and other configurations according to your Google Drive structure.

## Script Functionality

The script performs the following actions:

1. Retrieves the responses submitted through the Google Form.
2. Identifies the target folder based on the user's input in the form.
3. Moves the uploaded file to the corresponding folder based on the input.
4. Removes the file from the main folder if it is moved successfully.

## Important Notes

- Ensure that the folder IDs provided in the script are accurate and accessible to the script.
- The script requires proper permissions to access and modify files in Google Drive. Make sure you have the necessary permissions.

## Further Customizations

Feel free to customize the script according to your specific requirements. You can modify the folder mappings, add more conditions, or include additional functionalities based on your use case.

## Troubleshooting

If you encounter any issues with the script, please check the Google Apps Script documentation and the Google Drive API documentation for more information. Additionally, ensure that your Google Form and Google Drive configurations are properly set up.

