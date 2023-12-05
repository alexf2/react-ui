import * as React from 'react';
import { Table, T } from '@admiral-ds/react-ui';
import type { TableProps, Column, TableRow, RowId } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Separator = styled.div`
  height: 20px;
`;

const AmountCell = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;

  &[data-disabled='true'] {
    & > * {
      color: ${({ theme }) => theme.color['Neutral/Neutral 30']};
    }
  }
`;

const numberFormatter = new Intl.NumberFormat();

type RowData = TableRow & {
  transfer_type: string;
  transfer_date: string;
  transfer_amount: React.ReactNode;
  currency: string;
  rate: number;
};

type RowData2 = TableRow & {
  transfer_type?: string;
  transfer_date?: string;
  transfer_amount?: React.ReactNode;
  transfer_status?: string;
};

const rowList: RowData[] = [
  {
    id: '0001',
    transfer_type: 'МНО1',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(18_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0002',
    transfer_type: 'МНО2',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(32_500_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0003',
    transfer_type: 'МНО3',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(12_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0004',
    transfer_type: 'МНО4',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(55_500_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0005',
    transfer_type: 'МНО5',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(180_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0006',
    transfer_type: 'МНО6',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(500_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0007',
    transfer_type: 'МНО7',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(189_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0008',
    transfer_type: 'МНО8',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(6_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0009',
    transfer_type: 'МНО9',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(10_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
];

const rowList2: RowData2[] = [
  {
    id: '0001',
    expanded: false,
    groupTitle: 'First group name',
    groupRows: ['0002', '0003'],
  },
  {
    id: '0002',
    transfer_type: 'МНО2',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(32_500_000_000)}</T>
      </AmountCell>
    ),
    transfer_status: 'Выполнено',
  },
  {
    id: '0003',
    transfer_type: 'МНО3',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(18_000_000)}</T>
      </AmountCell>
    ),
    transfer_status: 'Выполнено',
  },
  {
    id: '0004',
    expanded: true,
    groupTitle: 'Second group name',
    groupRows: ['0005', '0006'],
  },
  {
    id: '0005',
    transfer_type: 'МНО5',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(18_000_000)}</T>
      </AmountCell>
    ),
    transfer_status: 'В ожиданиии',
  },
  {
    id: '0006',
    transfer_type: 'МНО6',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(32_500_000_000)}</T>
      </AmountCell>
    ),
    transfer_status: 'В ожиданиии',
  },
  {
    id: '0007',
    expanded: true,
    groupTitle: 'Third group name',
    groupRows: ['0008'],
  },
  {
    id: '0008',
    transfer_type: 'МНО8',
    transfer_date: new Date('2020-08-25').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(100)}</T>
      </AmountCell>
    ),
    transfer_status: 'Отклонено',
  },
];

const rowList3: RowData2[] = [
  {
    id: '0001',
    expanded: false,
    groupTitle: 'First group name',
    groupRows: ['0002', '0003'],
  },
  {
    id: '0002',
    transfer_type: 'МНО2',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(32_500_000_000)}</T>
      </AmountCell>
    ),
    transfer_status: 'Выполнено',
  },
  {
    id: '0003',
    transfer_type: 'МНО3',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(18_000_000)}</T>
      </AmountCell>
    ),
    transfer_status: 'Выполнено',
  },
  {
    id: '0004',
    expanded: true,
    groupTitle: 'Second group name',
    groupRows: ['0005', '0006'],
  },
  {
    id: '0005',
    transfer_type: 'МНО5',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(18_000_000)}</T>
      </AmountCell>
    ),
    transfer_status: 'В ожиданиии',
  },
  {
    id: '0006',
    transfer_type: 'МНО6',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(32_500_000_000)}</T>
      </AmountCell>
    ),
    transfer_status: 'В ожиданиии',
  },
  // {
  //   id: '0007',
  //   expanded: true,
  //   groupTitle: 'Third group name',
  //   groupRows: ['0008'],
  // },
  {
    id: '0008',
    transfer_type: 'МНО8',
    transfer_date: new Date('2020-08-25').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(100)}</T>
      </AmountCell>
    ),
    transfer_status: 'Отклонено',
  },
];

const columnList: Column[] = [
  {
    name: 'transfer_type',
    title: 'Тип сделки',
  },
  {
    name: 'transfer_date',
    title: 'Дата сделки',
    width: 150,
  },
  {
    name: 'transfer_amount',
    title: 'Сумма',
    width: 170,
  },
  {
    name: 'currency',
    title: 'Валюта',
  },
  {
    name: 'rate',
    title: 'Ставка',
  },
];

const columnList2: Column[] = [
  {
    name: 'transfer_type',
    title: 'Тип сделки',
  },
  {
    name: 'transfer_date',
    title: 'Дата сделки',
    width: 150,
  },
  {
    name: 'transfer_amount',
    title: 'Сумма',
    width: 170,
  },
  {
    name: 'transfer_status',
    title: 'Статус',
    width: 170,
  },
];

export const TableRowDragDropTemplate = (props: TableProps) => {
  const [cols, setCols] = React.useState(columnList);
  const [cols2, setCols2] = React.useState(columnList2);
  const [cols3, setCols3] = React.useState(columnList2);
  const [rows, setRows] = React.useState(rowList);
  const [rows2, setRows2] = React.useState(rowList2);
  const [rows3, setRows3] = React.useState(rowList3);

  const handleResize = ({ name, width }: { name: string; width: string }) => {
    const newCols = cols.map((col) => (col.name === name ? { ...col, width } : col));
    setCols(newCols);
  };

  const handleResize2 = ({ name, width }: { name: string; width: string }) => {
    const newCols = cols2.map((col) => (col.name === name ? { ...col, width } : col));
    setCols2(newCols);
  };

  const handleExpansionChange = (ids: Record<string | number, boolean>): void => {
    const updRows = rows2.map((row) => ({ ...row, expanded: ids[row.id] }));
    setRows2(updRows);
  };

  const handleExpansionChange3 = (ids: Record<string | number, boolean>): void => {
    const updRows = rows3.map((row) => ({ ...row, expanded: ids[row.id] }));
    setRows3(updRows);
  };

  const handleRowDrag = (rowId: RowId, nextRowId: RowId | null) => {
    const tableRows = [...rows];
    const movedIndex = tableRows.findIndex((row) => row.id === rowId);
    const movedRow = tableRows.splice(movedIndex, 1)[0];
    const beforeIndex = nextRowId ? tableRows.findIndex((row) => row.id === nextRowId) : tableRows.length;
    tableRows.splice(beforeIndex, 0, movedRow);

    setRows(tableRows);
  };

  const handleRowDrag2 = (rowId: RowId, nextRowId: RowId | null, groupRowId: RowId | null) => {
    console.log({ rowId, nextRowId, groupRowId });
    const tableRows = [...rows2];
    const movedIndex = tableRows.findIndex((row) => row.id === rowId);
    const movedRow = tableRows.splice(movedIndex, 1)[0];
    movedRow['transfer_status'] =
      groupRowId == '0001' ? 'Выполнено' : groupRowId == '0004' ? 'В ожидании' : 'Отклонено';
    const beforeIndex = nextRowId ? tableRows.findIndex((row) => row.id === nextRowId) : tableRows.length;
    tableRows.splice(beforeIndex, 0, movedRow);

    const groupRows = tableRows.filter((row) => row?.groupTitle);
    groupRows.forEach((row) => {
      if (row.id == groupRowId) {
        const newGroup = row.groupRows?.filter((id) => id !== rowId) || [];
        let beforeIndex = nextRowId ? newGroup.findIndex((id) => id == nextRowId) : newGroup.length;
        beforeIndex = beforeIndex == -1 ? newGroup.length : beforeIndex;
        newGroup.splice(beforeIndex, 0, rowId);
        row.groupRows = newGroup;
      } else if (row.groupRows) {
        const newGroup = row.groupRows.filter((id) => id !== rowId);
        row.groupRows = newGroup;
        // row.expanded = newGroup.length ? row.expanded : false;
      }
    });

    setRows2(tableRows);
    console.log(tableRows);
  };

  const handleRowDrag3 = (rowId: RowId, nextRowId: RowId | null, groupRowId: RowId | null) => {
    console.log({ rowId, nextRowId, groupRowId });
    const tableRows = [...rows3];
    const movedIndex = tableRows.findIndex((row) => row.id === rowId);
    const movedRow = tableRows.splice(movedIndex, 1)[0];
    movedRow['transfer_status'] =
      groupRowId == '0001' ? 'Выполнено' : groupRowId == '0004' ? 'В ожидании' : 'Отклонено';
    const beforeIndex = nextRowId ? tableRows.findIndex((row) => row.id === nextRowId) : tableRows.length;
    tableRows.splice(beforeIndex, 0, movedRow);

    const groupRows = tableRows.filter((row) => row?.groupTitle);
    groupRows.forEach((row) => {
      if (row.id == groupRowId) {
        const newGroup = row.groupRows?.filter((id) => id !== rowId) || [];
        let beforeIndex = nextRowId ? newGroup.findIndex((id) => id == nextRowId) : newGroup.length;
        beforeIndex = beforeIndex == -1 ? newGroup.length : beforeIndex;
        newGroup.splice(beforeIndex, 0, rowId);
        row.groupRows = newGroup;
      } else if (row.groupRows) {
        const newGroup = row.groupRows.filter((id) => id !== rowId);
        row.groupRows = newGroup;
        // row.expanded = newGroup.length ? row.expanded : false;
      }
    });

    setRows3(tableRows);
    console.log(tableRows);
  };

  return (
    <>
      <T font="Body/Body 2 Long">Пример с обычными строками</T>
      <Separator />
      <Table
        {...props}
        rowList={rows}
        columnList={cols}
        onColumnResize={handleResize}
        rowsDraggable
        onRowDrag={handleRowDrag}
      />
      <Separator />
      <T font="Body/Body 2 Long">Пример с группами строк</T>
      <Separator />
      <Table
        {...props}
        rowList={rows2}
        columnList={cols2}
        displayRowExpansionColumn
        onRowExpansionChange={handleExpansionChange}
        onColumnResize={handleResize2}
        rowsDraggable
        onRowDrag={handleRowDrag2}
      />
      <Separator />
      <T font="Body/Body 2 Long">Пример с группами и обычными строками. Проверить, что ничего не ломается!!!!!</T>
      <Separator />
      <Table
        {...props}
        rowList={rows3}
        columnList={cols3}
        displayRowExpansionColumn
        onRowExpansionChange={handleExpansionChange3}
        onColumnResize={handleResize2}
        rowsDraggable
        onRowDrag={handleRowDrag3}
      />
    </>
  );
};
