
# PDF Viewer React App Requirements

### Basic Requirements
- Upon clicking the view button. The document should be displayed in the document viewer.
- The document viewer should have a close button to close the preview modal.

### Password Protected Documents
- If the document is a password protected document, the user should be prompted to enter the password before the document is displayed in the document viewer.
- The prompt should have a cancel button to cancel the password prompt. 
- Upon entering the correct password, and clicking ok, the document should be displayed in the document viewer.
- Upon clicking the cancel button, the document viewer should be closed. along with the password prompt.
- Upon entering the wrong password, the user should be prompted to enter the password again.

### Multiple Page Documents with Navigation:

- Implement navigation controls (previous and next buttons) to browse through the document pages. Multiple page documents must be rendered with page numbers, with ability to navigate to the next and previous pages.
- Display the current page number and the total number of pages to the user.
- Optionally, you could add a page selector input for quick navigation to a specific page.
- Ensure that this container is responsive and provides a good reading experience on various screen sizes.
- The document viewer must be scrollable if the document is longer than the viewport.

### Modal Design for Document Viewer:
- There should be a clear separation between the document viewer and the rest of the application. The document viewer should be a modal that can be closed.
- To create a clear separation between the viewer and the rest of the application, consider implementing the viewer as a modal. This typically involves:
- A slightly opaque or blurred background to focus attention on the document.
- A distinct close button, possibly in the top-right corner of the modal.
- Animations for opening and closing the modal can also enhance UX.

### Zoom Controls:
- Implement zoom controls to zoom in and out of the document. The zoom controls should be accessible from the document viewer.

### Potrait and Landscape Mode:
- The document viewer should be able to display documents in both portrait and landscape mode.
- Implement a button to toggle between portrait and landscape mode.
  
### Page Breaks Between Pages:
- In your DocumentViewer, you can add a style to each Page component to create a separation, like a bottom margin, to simulate a page break. Each page should be separated by a page break.