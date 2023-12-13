import React, { useState } from 'react';
import DocumentViewer from './DocumentViewer';
import { Button, Typography, Container } from '@material-ui/core';

const App = () => {
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const documentFile = process.env.PUBLIC_URL + '/large-multi-page.pdf';
    const handleOpenViewer = () => setIsViewerOpen(true);
    const handleCloseViewer = () => setIsViewerOpen(false);

    return (
        <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '20px' }}>
            <Typography variant="h4" gutterBottom>
                PDF Viewer React App
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Simple App to view PDFs using react-pdf, handles password protected files and multi-page PDFs with navigation features and good UX.
            </Typography>
            <Button variant="contained" color="primary" onClick={handleOpenViewer}>
                View Document
            </Button>
            {isViewerOpen && (
                <DocumentViewer file={documentFile} onClose={handleCloseViewer} />
            )}
        </Container>
    );
};

export default App;
