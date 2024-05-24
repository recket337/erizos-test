import React, { Component } from 'react';
import { FileProps } from './types';

interface FileState {
    isVisible: boolean;
}

class File extends Component<FileProps, FileState> {
    constructor(props: FileProps) {
        super(props);
        this.state = {
            isVisible: true,
        };
    }

    componentDidUpdate(prevProps: FileProps) {
        if (prevProps.searchTerm !== this.props.searchTerm) {
            const { name, searchTerm, hashPath, setVisiblePath } = this.props;
            const isOverlapping = searchTerm ? name.toLowerCase().includes(searchTerm.toLowerCase()) : true;
            
            this.setState(() => ({ isVisible: isOverlapping}));

            if (isOverlapping && hashPath && setVisiblePath) {
                setVisiblePath(hashPath);
            }
        }
    }

    render() {
        const { name, mimeType } = this.props;
        const { isVisible } = this.state;

        return isVisible ? (
            <div className="file">
                📄<span>{name}</span> <span>{mimeType}</span>
            </div>
        ) : null;
    }
}

export default File;