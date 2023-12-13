
## PDF Viewer React App

### Requirements
- Upon clicking the view button. The document should be displayed in the document viewer.
- The document viewer should have a close button to close the preview modal.
- If the document is a password protected document, the user should be prompted to enter the password before the document is displayed in the document viewer.
- The prompt should have a cancel button to cancel the password prompt. 
- Upon entering the correct password, and clicking ok, the document should be displayed in the document viewer.
- Upon clicking the cancel button, the document viewer should be closed. along with the password prompt.
- Upon entering the wrong password, the user should be prompted to enter the password again.
- Multiple page documents must be rendered with page numbers, with ability to navigate to the next and previous pages.
- The document viewer must be scrollable if the document is longer than the viewport.
- There should be a clear separation between the document viewer and the rest of the application. The document viewer should be a modal that can be closed.
- Each page should be separated by a page break.

### Solution
- The solution is implemented with react using react-pdf which is a react wrapper for pdf.js.