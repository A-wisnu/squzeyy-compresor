# 🚀 File Compression App

<div align="center">
  <img src="https://i.imgur.com/KvD47HD.gif" alt="File Compression Animation" width="700"/>
</div>

## ✨ Features

<div align="center">
  <img src="https://i.imgur.com/JGfVOpn.gif" alt="Features Animation" width="600"/>
</div>

- **💾 Multiple File Type Support**
  - PDF documents (optimized compression)
  - Images (JPG, PNG, WebP, BMP, GIF)
  - Word documents (DOCX, DOC)
  - Other file types with standard compression

- **⚡ Intelligent Compression**
  - Adaptive compression based on file type
  - Resizes large images while maintaining quality
  - PDF optimization with metadata stripping
  - Only applies compression when it actually reduces file size

- **🔄 Real-time Progress Tracking**
  - Visual upload progress indicators
  - Detailed compression results
  - File-by-file statistics

- **💻 Modern User Interface**
  - Drag and drop file uploads
  - Responsive design for all devices
  - Animated elements for better user experience

## 🛠️ Tech Stack

<div align="center">
  <img src="https://i.imgur.com/mV8Cb5F.gif" alt="Tech Stack Animation" width="650"/>
</div>

### Frontend
- **React** - UI library
- **JSZip** - Client-side ZIP file handling
- **Axios** - HTTP requests
- **React-Dropzone** - File upload functionality
- **File-Saver** - Download handling

### Backend
- **Flask** - Python web framework
- **Flask-CORS** - Cross-origin resource sharing
- **Pillow** - Image processing
- **PikePDF** - PDF optimization
- **ZLib** - Compression algorithms

## 📊 Compression Methods

<div align="center">
  <img src="https://i.imgur.com/RkDtJyG.gif" alt="Compression Methods Animation" width="600"/>
</div>

### PDF Compression
- Stream compression
- Object stream optimization
- Metadata stripping
- Content stream compression

### Image Compression
- Format conversion (when beneficial)
- Quality reduction (configurable)
- Dimension resizing for large images
- Mode conversion for optimal compression

### Document Compression
- Custom ZLib compression with max level
- ZIP recompression for already compressed formats

## 🚀 Getting Started

### Prerequisites
- Node.js and npm
- Python 3.8+

### Installation

#### Frontend Setup
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm start
```

#### Backend Setup
```bash
# Navigate to backend directory
cd backend

# Create and activate virtual environment (optional but recommended)
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Start Flask server
python app.py
```

## 💡 How It Works

<div align="center">
  <img src="https://i.imgur.com/pXb1gG7.gif" alt="How It Works Animation" width="650"/>
</div>

1. **Upload Files**: Users select or drag and drop files into the application
2. **Processing**: Files are sent to the backend server
3. **Compression**: Each file is compressed using the optimal algorithm for its type
4. **Results**: Compressed files are bundled into a ZIP archive and sent back
5. **Analysis**: Users receive detailed compression statistics for each file
6. **Download**: The compressed ZIP file is automatically downloaded

## 🔍 Compression Results

The application provides detailed statistics for each compressed file:
- Original filename
- Initial file size
- Compressed file size
- Compression ratio
- Space saved

## 🙏 Acknowledgements

- Image compression techniques inspired by modern web optimization practices
- PDF compression methodology based on the PikePDF library documentation
- UI animations designed with performance and user experience in mind

---

<div align="center">
  <h3>Made with ❤️ for data compression efficiency</h3>
  <p>© 2025 File Compression App</p>
</div> 