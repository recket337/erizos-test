import React, { Component } from 'react';
import { FileType, FolderType } from './types';
import File from '../File/File';
import { MyBrowserChildrenEnum } from '../../types';
import { generateUniqueId } from '../../../../utils/generateUniqueId';

interface FolderProps {
    hashPath?: string;
    name: string;
    children: Array<FileType | FolderType>;
    searchTerm: string;
    defaultExpanded: boolean;
    path: string;
    expandedFolders: string[];
    addExpandCallback: (folderHash: string, expandCallback: (state: boolean) => void) => void;
    setVisiblePath: (path: string) => void;
}

interface FolderState {
    isExpanded: boolean;
}

class Folder extends Component<FolderProps, FolderState> {
    uniqueFolderHash: string;

    constructor(props: FolderProps) {
        super(props);
        this.uniqueFolderHash = generateUniqueId();
        this.state = {
            isExpanded: this.props.defaultExpanded,
        };

        this.props.addExpandCallback(this.uniqueFolderHash, this.setExpand);
    }

    setExpand = (state: boolean) => {
        this.setState(() => ({
            isExpanded: state,
        }));
    };

    toggleExpand = () => {
        this.setState((prevState) => ({
            isExpanded: !prevState.isExpanded
        }));
    };

    render() {
        const { name, children, searchTerm, path, expandedFolders, hashPath, addExpandCallback, setVisiblePath } = this.props;
        const { isExpanded } = this.state;

        return (
            <div>
                <div onClick={this.toggleExpand} style={{ cursor: 'pointer' }}>
                    {isExpanded ? '📂' : '📁'} {name}
                </div>
                <div className={`expandable ${isExpanded ? 'expanded' : 'collapsed'}`}>
                    {children.map((child, index) => {
                        const pathToChild = `${path}/${child.name}`

                        if (child.type === MyBrowserChildrenEnum.Folder) {
                            return (
                                <Folder
                                    key={pathToChild}
                                    name={child.name}
                                    children={child.children}
                                    searchTerm={searchTerm}
                                    defaultExpanded={expandedFolders.includes(`${path}/${child.name}`)}
                                    path={pathToChild}
                                    expandedFolders={expandedFolders}
                                    addExpandCallback={addExpandCallback}
                                    hashPath={`${hashPath}/${this.uniqueFolderHash}`}
                                    setVisiblePath={setVisiblePath}
                                />
                            );
                        }
                        if (child.type === MyBrowserChildrenEnum.File) {
                            return <File 
                                key={pathToChild} 
                                name={child.name} 
                                mimeType={child.mimeType} 
                                searchTerm={searchTerm} 
                                setVisiblePath={setVisiblePath}
                                hashPath={`${hashPath}/${this.uniqueFolderHash}`}
                            />;
                        }
                        return null;
                    })}
                </div>

            </div>
        );
    }
}

export default Folder;