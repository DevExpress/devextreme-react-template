import React, { useState, useEffect } from 'react';
import {
  DataGrid,
  Column,
  Pager,
  Paging,
  FilterRow
} from 'devextreme-react/data-grid';
import axios from 'axios';
import './tasks.scss';

const baseUrl = 'https://js.devexpress.com/Demos/RwaService/api';
const getTasks = async () => (await axios.get(`${baseUrl}/Employees/AllTasks`)).data;

export function Tasks() {
  const [gridData, setGridData] = useState([]);

  useEffect(() => {
    getTasks().then(setGridData).catch(console.log);
  }, []);

  return (
    <React.Fragment>
      <h2>Tasks</h2>

      <DataGrid
        className={'dx-card content-block'}
        dataSource={gridData}
        showBorders={false}
        focusedRowEnabled={true}
        defaultFocusedRowIndex={0}
        columnAutoWidth={true}
        columnHidingEnabled={true}
      >
        <Paging defaultPageSize={10} />
        <Pager showPageSizeSelector={true} showInfo={true} />
        <FilterRow visible={true} />

        <Column dataField={'id'} width={90} hidingPriority={1} />
        <Column
          dataField={'text'}
          width={190}
          caption={'Subject'}
          hidingPriority={6}
        />
        <Column
          dataField={'status'}
          caption={'Status'}
          hidingPriority={4}
        />
        <Column
          dataField={'owner'}
          caption={'Assigned To'}
          allowSorting={false}
          hidingPriority={5}
        />
        <Column
          dataField={'startDate'}
          caption={'Start Date'}
          dataType={'date'}
          hidingPriority={2}
        />
        <Column
          dataField={'dueDate'}
          caption={'Due Date'}
          dataType={'date'}
          hidingPriority={3}
        />
        <Column
          dataField={'priority'}
          caption={'Priority'}
          hidingPriority={0}
        />
      </DataGrid>
    </React.Fragment>
  );
}
