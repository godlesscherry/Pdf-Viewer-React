# PDF Viewer React App

Simple React app to view pdfs using react-pdf, handles password protected files and multi-page pdfs with navigation features and good ux.

See `Requirements.md` for the original requirements.

## Project Structure

- `App.js`: This is the main component of the application. It manages the state of the document viewer and renders a button to open the viewer and the `DocumentViewer` component itself.
- `DocumentViewer.js`: This is the component that displays the PDF document. It uses the `react-pdf` library to render the document.

## Setup and Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies with `npm install`.
4. Start the development server with `npm start`.

## Usage

Click the "View Document" button to open the document viewer. The document viewer will display the PDF document specified in the `App.js` file.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)