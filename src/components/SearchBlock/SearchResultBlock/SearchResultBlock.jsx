import React from 'react';
import './SearchResultBlock.scss';
import { tableData } from '../../../utils/constants';

const SearchResultBlock = () => {
  return (
    <div className='result-block'>
      <table className='result-block__table'>
        <thead>
        <tr>
          {tableData.head.map((column) => (
            <th className='result-block__thead-th' scope='col' key={column.id}>
              {column.value}
            </th>
          ))}
        </tr>
        </thead>
        <tbody>
        {tableData.body.map((bodyRow) => (
          <tr key={bodyRow.id}>
            {bodyRow.rowData.map((rowColumn) => (
              <td className='result-block__tbody-td' key={rowColumn.id}>{rowColumn.value}</td>
            ))}
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResultBlock;
