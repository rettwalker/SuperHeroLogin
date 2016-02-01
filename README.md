# Superhero-login
- Ember Front-End
- Waterlock Auth
- Sails REST api

- Needed to create my own registration since Waterlock-Local-Auth is currently not implementing one
- Added Facebook Auth methods though they are currently failing because the accessCode is not found
- Used both ember-cli-file-picker and ember-uploader to create a way to upload images for profile pictures
  - Used ember-cli-file-picker to open up file system and to display a preview of the image before uploading
  - Finished with using ember-uploader in an action that sent the file to Sails backend
  - images are then pulled from Sails to display as user profile pictures to keep the frontend size lower
  - currently clicking save on profile reverts the saved img to older picture location "need to fix"

#Need to do
- Fix facebook auth
- issue with save button and photolink
- maybe work on layout and design
- fix issue with team addition.
  - Not always auto uploading teams a person is affliated with on profile edit page.
  - It is also removing other members from the team
