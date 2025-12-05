import React, { useState } from 'react';
// You might need to install react-icons for a better visual representation:
// npm install react-icons
import { FaFolder, FaFolderOpen, FaFile, FaChevronRight, FaChevronDown } from 'react-icons/fa';
import './FileExplorer.css'; // We will add CSS next
import { FaFolderClosed } from 'react-icons/fa6';

const FileExplorer = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    if (data.type === 'folder') {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="file-item">
      <div className="item-header" onClick={toggleOpen}>
        {data.type === 'folder' ? (
          isOpen ? (
            <FaChevronDown className="toggle-icon" />
          ) : (
            <FaChevronRight className="toggle-icon" />
          )
        ) : (
          <span className="toggle-icon-placeholder"></span> // Placeholder for alignment
        )}

        {data.type === 'folder' ? (
          isOpen ? (
            <FaFolderOpen className="folder-icon" />
          ) : (
            <FaFolder className="folder-icon" />
          )
        ) : (
          <FaFile className="file-icon" />
        )}

        <span className="item-name">{data.name}</span>
      </div>

      {isOpen && data.children && (
        <div className="item-children">
          {data.children.map((item, index) => (
            // Recursively render FileExplorer for child items
            <FileExplorer key={index} data={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FileExplorer;
