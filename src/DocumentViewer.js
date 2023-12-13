import React, { useState } from 'react';
import { pdfjs, Document, Page, PasswordResponses } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
 
const DocumentViewer = ({ file, onClose }) => {
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    // Custom function for onPassword callback
    const customOnPassword = (callback, reason) => {
        let passwordPrompt = 'Enter the password to open this PDF file.';
        if (reason === PasswordResponses.INCORRECT_PASSWORD) {
            passwordPrompt = 'Invalid password. Please try again.';
        }

        // Prompt user for password
        const password = prompt(passwordPrompt);
        if (password) {
            // If a password is provided, pass it to the callback
            console.log('Password provided is correct.');
            callback(password);
        } else {
            // Handle the case where the user cancels the password prompt
            onClose(); // For example, call the onClose prop
        }
    };
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <button onClick={onClose}>Close</button>
            <div style={{ overflow: 'auto', maxHeight: '80vh', maxWidth: '80vw' }}>
                <Document
                    file={file}
                    onLoadSuccess={onDocumentLoadSuccess}
                    onPassword={customOnPassword}
                >
                    {Array.from(new Array(numPages), (el, index) => (
                        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                    ))}
                </Document>
            </div>
        </div>
    );
};

export default DocumentViewer;
