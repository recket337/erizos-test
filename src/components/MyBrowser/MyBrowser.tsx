import React, { Component } from 'react';
import Folder from './components/Folder/Folder';
import { FolderType } from './components/Folder/types';
import { MyBrowserChildrenEnum } from './types';
import { dataMock } from './mock';

interface MyBrowserState {
  searchTerm: string;
  data: FolderType;
  expandCallbacks: Record<string, (state: boolean) => void>;
  visiblePathsHashes: Set<string>;
}

interface MyBrowserProps {
  expandedFolders: string[];
}

class MyBrowser extends Component<MyBrowserProps, MyBrowserState> {
  constructor(props: MyBrowserProps) {
    super(props);
    this.state = {
      searchTerm: '',
      data: {
        type: MyBrowserChildrenEnum.Folder,
        name: 'root',
        children: [],
      },
      expandCallbacks: {},
      visiblePathsHashes: new Set<string>(),
    };
  }

  componentDidMount(): void {
    // fetch some data
    this.setState({ data: dataMock });
  }

  addExpandCallback = (folderHash: string, expandCallback: (state: boolean) => void): void => {
    this.setState((prevState) => ({ 
      expandCallbacks: { 
        ...prevState.expandCallbacks, 
        [folderHash]: expandCallback 
      },
    }));
  }

  setVisiblePath = (hashPath: string) => {
    this.setState((prevState) => ({
      visiblePathsHashes: new Set<string>([...prevState.visiblePathsHashes, ...hashPath.split('/')])
    }))
  }

  handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value, visiblePathsHashes: new Set<string>()}); // 
    console.log(this.state.visiblePathsHashes)

    setTimeout(() => {
      Object.entries(this.state.expandCallbacks).forEach(([hash, cb]) => {
        const isVisible = this.state.visiblePathsHashes.has(hash);
        console.log(hash, isVisible)
        cb(isVisible);
      })
    }, 100)
  };

  render() {
    const { data, visiblePathsHashes } = this.state;

    console.log(visiblePathsHashes);

    return (
      <div>
        <input
          type="text"
          placeholder="Search files"
          value={this.state.searchTerm}
          onChange={this.handleSearch}
          style={{ width: '100%' }}
        />
        <Folder
          name={data.name}
          children={data.children}
          searchTerm={this.state.searchTerm}
          defaultExpanded={true}
          path=""
          hashPath=""
          addExpandCallback={this.addExpandCallback}
          expandedFolders={this.props.expandedFolders}
          setVisiblePath={this.setVisiblePath}
        />
      </div>
    );
  }
}

export default MyBrowser;