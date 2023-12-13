import React, { useState } from 'react';
import DocumentViewer from './DocumentViewer';

const App = () => {
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const documentFile = process.env.PUBLIC_URL + '/large-multi-page.pdf';
    const handleOpenViewer = () => setIsViewerOpen(true);
    const handleCloseViewer = () => setIsViewerOpen(false);
    return (
        <div>
            <button onClick={handleOpenViewer}>View Document</button>
            {isViewerOpen && (
                <DocumentViewer file={documentFile} onClose={handleCloseViewer} />
            )}
        </div>
    );
};

export default App;
