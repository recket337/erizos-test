export interface FileProps {
  searchTerm?: string;
  hashPath?: string;
  setVisiblePath?: (path: string) => void;
  name: string;
  mimeType: string;
}