import * as React from 'react';
import { forwardRef, HTMLAttributes } from 'react';
import { FileInputDimension } from '#src/components/input/FileInput';
import styled, { css, DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';
import { typography } from '#src/components/Typography';
import { formatBytes, getFormat, dataTransferConstructorSupported } from '#src/components/input/FileInput/utils';
import { Spinner } from '#src/components/Spinner';
import { ReactComponent as PDFSolid } from '@admiral-ds/icons/build/documents/PDFSolid.svg';
import { ReactComponent as PPTSolid } from '@admiral-ds/icons/build/documents/PPTSolid.svg';
import { ReactComponent as FileWordSolid } from '@admiral-ds/icons/build/documents/FileWordSolid.svg';
import { ReactComponent as XLSSolid } from '@admiral-ds/icons/build/documents/XLSSolid.svg';
import { ReactComponent as DocsSolid } from '@admiral-ds/icons/build/documents/DocsSolid.svg';
import { ReactComponent as JpgSolid } from '@admiral-ds/icons/build/documents/JpgSolid.svg';
import { ReactComponent as CloseOutline } from '@admiral-ds/icons/build/service/CloseOutline.svg';
import {
  ERROR_BLOCK_HEIGHT_M,
  ERROR_BLOCK_HEIGHT_XL,
  FILE_ITEM_FUNCTIONAL_ICON_SIZE_M,
  FILE_ITEM_FUNCTIONAL_ICON_SIZE_XL,
  FILE_ITEM_PREVIEW_ICON_SIZE_XL,
  FILE_ITEM_WRAPPER_HEIGHT_M,
  FILE_ITEM_WRAPPER_HEIGHT_XL,
  FILE_ITEM_WRAPPER_PADDING_M,
  FILE_ITEM_WRAPPER_PADDING_XL,
} from '#src/components/input/FileInput/style';

export type Status = 'Uploaded' | 'Loading' | 'Error' | 'Queue';

const Container = styled.div<{
  dimension?: FileInputDimension;
  filesLayoutCssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}>`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  overflow: hidden;
  ${(p) => p.filesLayoutCssMixin}
`;

const statusMixin = css<{ status?: Status }>`
  border-color: ${(p) => {
    if (p.status === 'Error') return p.theme.color['Error/Error 60 Main'];
    if (p.status === 'Queue') return p.theme.color['Neutral/Neutral 30'];
    return p.theme.color['Neutral/Neutral 40'];
  }};
  color: ${(p) => (p.status === 'Queue' ? p.theme.color['Neutral/Neutral 30'] : p.theme.color['Neutral/Neutral 90'])};
`;

const PreviewWrapper = styled.div<{
  dimension?: FileInputDimension;
  status?: Status;
}>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
  border-width: 1px;
  border-style: solid;
  padding: ${(p) => (p.dimension === 'xl' ? FILE_ITEM_WRAPPER_PADDING_XL : FILE_ITEM_WRAPPER_PADDING_M)};
  height: ${(p) => (p.dimension === 'xl' ? FILE_ITEM_WRAPPER_HEIGHT_XL : FILE_ITEM_WRAPPER_HEIGHT_M)};
  ${typography['Body/Body 2 Long']};
  ${statusMixin};
`;

const sizeMixin = css`
  align-items: center;
  justify-content: space-between;
`;

const hoveredFileTypeIconCss = css`
  &:not(:disabled) {
    &::after {
      content: '';
      position: absolute;
      border-radius: 4px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      background-color: ${({ theme }) => theme.color['Opacity/Modal']};
    }
  }
`;

const IconWrapper = styled.div<{ status?: Status }>`
  position: relative;
  margin-right: 8px;
  border-radius: 4px;
  width: ${FILE_ITEM_PREVIEW_ICON_SIZE_XL};
  height: ${FILE_ITEM_PREVIEW_ICON_SIZE_XL};

  & svg {
    fill: ${(p) => {
      if (p.status === 'Queue') return p.theme.color['Neutral/Neutral 30'];
      return p.theme.color['Neutral/Neutral 50'];
    }};
  }
  
  &:hover:not(:disabled),
  &:focus:not(:disabled) + ${hoveredFileTypeIconCss}
`;

const Content = styled.div<{ dimension?: FileInputDimension }>`
  ${(p) => p.dimension === 'm' && sizeMixin};
  display: flex;
  flex-direction: ${(p) => (p.dimension === 'm' ? 'row' : 'column')};
  min-width: 0;
`;

const FileInfoBlock = styled.div<{ dimension?: FileInputDimension }>`
  display: ${(p) => (p.dimension === 'm' ? 'block' : 'flex')};
  align-items: center;
  overflow: hidden;
  height: ${(p) => (p.dimension === 'xl' ? '40px' : '20px')};
`;

const FileName = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const FileInfo = styled.span<{ dimension?: FileInputDimension; status?: Status }>`
  color: ${(p) => (p.status === 'Queue' ? p.theme.color['Neutral/Neutral 30'] : p.theme.color['Neutral/Neutral 50'])};
  margin-left: ${(p) => (p.dimension === 'xl' ? '0' : '4px')};
  white-space: nowrap;
`;

const FunctionalWrapper = styled.div`
  display: flex;
  flex: 0 0 auto;
  margin-left: 8px;
`;

const functionalItemSizeMixin = css<{ dimension?: FileInputDimension }>`
  width: ${(p) => (p.dimension === 'xl' ? FILE_ITEM_FUNCTIONAL_ICON_SIZE_XL : FILE_ITEM_FUNCTIONAL_ICON_SIZE_M)};
  height: ${(p) => (p.dimension === 'xl' ? FILE_ITEM_FUNCTIONAL_ICON_SIZE_XL : FILE_ITEM_FUNCTIONAL_ICON_SIZE_M)};
`;

const StyledSpinner = styled(Spinner)<{ dimension?: FileInputDimension }>`
  margin-right: 8px;
  ${functionalItemSizeMixin}
`;

const hoveredCloseIconCss = css`
  &:not(:disabled) {
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      width: calc(100% + 8px);
      height: calc(100% + 8px);
      background-color: ${({ theme }) => theme.color['Opacity/Hover']};
    }
  }
`;

const Close = styled.div<{ dimension?: FileInputDimension }>`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  ${functionalItemSizeMixin}
  &:hover:not(:disabled),
  &:focus:not(:disabled) + ${hoveredCloseIconCss}
  & svg {
    fill: ${(p) => p.theme.color['Neutral/Neutral 50']};
    ${functionalItemSizeMixin}
  }
`;

export const ErrorBlock = styled.div<{ status?: Status; dimension?: FileInputDimension }>`
  margin-top: 8px;
  color: ${(p) => p.theme.color['Error/Error 60 Main']};
  ${typography['Body/Body 2 Short']};
  height: ${(p) => (p.dimension === 'xl' ? ERROR_BLOCK_HEIGHT_XL : ERROR_BLOCK_HEIGHT_M)};
`;

/**
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#important_mime_types_for_web_developers
 * @param type {string}
 */
const getIcon = (type: string) => {
  switch (type) {
    case 'image/jpeg':
    case 'image/png':
    case 'image/tiff':
    case 'image/svg+xml':
    case 'image/apng':
    case 'image/avif':
    case 'image/gif':
    case 'image/webp':
      return JpgSolid;
    case 'application/pdf':
      return PDFSolid;
    case 'application/vnd.ms-powerpoint':
    case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
      return PPTSolid;
    case 'application/vnd.ms-excel':
    case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
      return XLSSolid;
    case 'application/msword':
    case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
      return FileWordSolid;
    default:
      return DocsSolid;
  }
};

export interface RenderFileListItemProps {
  key?: string | number;
  /** Отключение секции */
  disabled?: boolean;
  /** Обработчик клика по item */
  onClickItem?: () => void;
  /** Обработчик наведения мыши на item */
  onHover?: () => void;
}

export interface FileListItemProps {
  id: string;
  render: (options: RenderFileListItemProps) => React.ReactNode;
  disabled?: boolean;
}

export interface FileItemProps extends HTMLAttributes<HTMLDivElement>, RenderFileListItemProps {
  file: File;
  /** Размер FileItem */
  dimension?: FileInputDimension;
  /** Статус компонента, имеет четыре состояния: Uploaded, Loading, Error, Queue */
  status?: Status;
  /** Текст ошибки при загрузке файла */
  errorMessage?: string;
  /** Отображение превью изображений  */
  showPreview?: boolean;
  /** Позволяет добавлять миксин для компоновки загруженных файлов, созданный с помощью styled css  */
  filesLayoutCssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}

export const FileItem = forwardRef<HTMLDivElement, FileItemProps>(
  ({ children, file, dimension, status, errorMessage, showPreview, filesLayoutCssMixin, ...props }, ref) => {
    const PreviewIcon = getIcon(file.type);
    const fileFormat = getFormat(file.type);
    const fileSize = formatBytes(file.size);
    const fileInfo = `${fileFormat}・${fileSize} Mb`;
    const fileName = file.name.substring(0, file.name.lastIndexOf('.'));

    const titleRef = React.useRef<HTMLDivElement | null>(null);

    return (
      <Container ref={ref} dimension={dimension} filesLayoutCssMixin={filesLayoutCssMixin}>
        <PreviewWrapper status={status} dimension={dimension}>
          <FileInfoBlock dimension={dimension}>
            {dimension === 'xl' && (
              <IconWrapper status={status}>
                <PreviewIcon />
              </IconWrapper>
            )}
            <Content dimension={dimension}>
              <FileName ref={titleRef}>{fileName}</FileName>
              <FileInfo dimension={dimension} status={status}>
                {fileInfo}
              </FileInfo>
            </Content>
          </FileInfoBlock>
          <FunctionalWrapper>
            {status === 'Loading' && <StyledSpinner dimension={dimension} />}
            {dataTransferConstructorSupported() && (
              <Close dimension={dimension} onClick={() => null}>
                <CloseOutline />
              </Close>
            )}
          </FunctionalWrapper>
        </PreviewWrapper>
        {errorMessage && status === 'Error' && <ErrorBlock status={status}>{errorMessage}</ErrorBlock>}
      </Container>
    );
  },
);
