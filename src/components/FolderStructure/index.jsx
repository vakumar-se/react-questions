import React, { useState } from 'react';
// You might need to install react-icons for a better visual representation:
// npm install react-icons
import { FaFolder, FaFolderOpen, FaFile, FaChevronRight, FaChevronDown } from 'react-icons/fa';
import './FileExplorer.css'; // We will add CSS next
import { FaFolderClosed } from 'react-icons/fa6';

const FileExplorer = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log('data', data);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="file-item">
      <div className="item-header" onClick={handleClick}>
        {data?.type === 'folder' ? isOpen ? <FaChevronDown /> : <FaChevronRight /> : null}
        <span className="item-name">{data?.name}</span>
      </div>
      {isOpen &&
        data?.children &&
        data?.children?.map((item, index) => <FileExplorer key={index} data={item} />)}
    </div>
  );
};

export default FileExplorer;
