import { FolderType } from "./components/Folder/types";
import { MyBrowserChildrenEnum } from "./types";

export const dataMock: FolderType = {
    type: MyBrowserChildrenEnum.Folder,
    name: 'root',
    children: [
        {
            type: MyBrowserChildrenEnum.Folder,
            name: 'Folder 1',
            children: [
                {
                    type: MyBrowserChildrenEnum.File,
                    name: 'file1.txt',
                    mimeType: 'text/plain'
                },
                {
                    type: MyBrowserChildrenEnum.Folder,
                    name: 'Folder 1.1',
                    children: [
                        {
                            type: MyBrowserChildrenEnum.File,
                            name: 'file1.1.txt',
                            mimeType: 'text/plain'
                        },
                        {
                            type: MyBrowserChildrenEnum.Folder,
                            name: 'Folder 2',
                            children: [
                                {
                                    type: MyBrowserChildrenEnum.File,
                                    name: 'file3.txt',
                                    mimeType: 'text/plain'
                                }
                            ]
                        },
                    ]
                }
            ]
        },
        {
            type: MyBrowserChildrenEnum.Folder,
            name: 'Folder 2',
            children: []
        },
        {
            type: MyBrowserChildrenEnum.File,
            name: 'file2.txt',
            mimeType: 'text/plain'
        }
    ]
};