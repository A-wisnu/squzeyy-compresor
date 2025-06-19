import React, { useState } from 'react';
import axios from 'axios';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import MainContent from './components/MainContent';
import CompressionResultsModal from './components/CompressionResultsModal';
import LoadingOverlay from './components/LoadingOverlay';
import ProfileModal from './components/ProfileModal';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [compressionResults, setCompressionResults] = useState(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [zipBlob, setZipBlob] = useState(null);
  const [loadingProgress, setLoadingProgress] = useState({
    totalFiles: 0,
    processedFiles: 0,
    currentStatus: 'Preparing files...'
  });

  const handleFileCompression = async (files) => {
    setIsLoading(true);
    const formData = new FormData();
    
    // Set initial loading state
    setLoadingProgress({
      totalFiles: files.length,
      processedFiles: 0,
      currentStatus: 'Preparing files for compression...'
    });
    
    files.forEach(file => {
      formData.append('files', file);
    });
    
    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5001';
      
      setLoadingProgress(prev => ({
        ...prev,
        currentStatus: 'Uploading files to server...'
      }));
      
      const response = await axios.post(`${apiUrl}/compress`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        responseType: 'arraybuffer',
        onUploadProgress: (progressEvent) => {
          // Update loading status during upload
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setLoadingProgress(prev => ({
            ...prev,
            currentStatus: `Uploading: ${percentCompleted}% complete`,
          }));
        }
      });
      
      setLoadingProgress(prev => ({
        ...prev,
        currentStatus: 'Processing compression results...'
      }));
      
      // Extract the compression results from headers
      const resultsHeader = response.headers['compression-results'];
      const results = resultsHeader ? JSON.parse(decodeURIComponent(resultsHeader)) : [];
      
      // Process the ZIP file containing compressed files
      const zip = new JSZip();
      await zip.loadAsync(response.data);
      
      // Update processed files count based on actual results
      setLoadingProgress(prev => ({
        ...prev,
        processedFiles: results.length,
        currentStatus: 'Finalizing compression...'
      }));
      
      // Save the ZIP file
      const zipBlob = new Blob([response.data], { type: 'application/zip' });
      saveAs(zipBlob, 'compressed_files.zip');
      
      setZipBlob(zipBlob);
      setCompressionResults(results);
    } catch (error) {
      console.error('Error compressing files:', error);
      alert('Failed to compress files. Please try again.');
    } finally {
      setIsLoading(false);
      // Reset loading progress
      setLoadingProgress({
        totalFiles: 0,
        processedFiles: 0,
        currentStatus: 'Preparing files...'
      });
    }
  };

  const closeResultsModal = () => {
    setCompressionResults(null);
    setZipBlob(null);
  };

  const toggleProfileModal = () => {
    setIsProfileModalOpen(!isProfileModalOpen);
  };

  return (
    <div className="App">
      <MainContent 
        onFileSelected={handleFileCompression} 
        onInfoClick={toggleProfileModal}
      />
      
      {isLoading && (
        <LoadingOverlay 
          totalFiles={loadingProgress.totalFiles}
          processedFiles={loadingProgress.processedFiles}
          status={loadingProgress.currentStatus}
        />
      )}
      
      {compressionResults && (
        <CompressionResultsModal 
          results={compressionResults} 
          zipBlob={zipBlob}
          onClose={closeResultsModal} 
        />
      )}

      {isProfileModalOpen && <ProfileModal onClose={toggleProfileModal} />}

      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>
    </div>
  );
}

export default App;
