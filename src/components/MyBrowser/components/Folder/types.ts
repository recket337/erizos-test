import { MyBrowserChildrenEnum } from "../../types";
import { FileProps } from "../File/types";

export interface FileType extends FileProps {
    type: MyBrowserChildrenEnum.File;
}

export interface FolderType {
    type: MyBrowserChildrenEnum.Folder;
    name: string;
    children: Array<FileType | FolderType>;
}