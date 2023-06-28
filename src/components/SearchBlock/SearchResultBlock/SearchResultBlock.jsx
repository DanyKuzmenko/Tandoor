import React from 'react';
import './SearchResultBlock.scss';

const SearchResultBlock = () => {
  return (
    <div className="result-block">
      <table className="result-block__table">
        <thead>
          <tr>
            <th className="result-block__thead-th" scope="col">
              №
            </th>
            <th className="result-block__thead-th" scope="col">
              Краткое наименование
            </th>
            <th className="result-block__thead-th" scope="col">
              Полное наименование
            </th>
            <th className="result-block__thead-th" scope="col">
              Содержание
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="result-block__tbody-td">001</td>
            <td className="result-block__tbody-td">KPI №1</td>
            <td className="result-block__tbody-td">
              Июльский KPI по межкомнатным дверям
            </td>
            <td className="result-block__tbody-td">
              Прага/Венге/Классика/Александра/Виктория
            </td>
          </tr>
          <tr>
            <td className="result-block__tbody-td">002</td>
            <td className="result-block__tbody-td">KPI №1</td>
            <td className="result-block__tbody-td">
              Летная мотивация по входным дверям
            </td>
            <td className="result-block__tbody-td">Входные двери</td>
          </tr>
          <tr>
            <td className="result-block__tbody-td">003</td>
            <td className="result-block__tbody-td">KPI №1</td>
            <td className="result-block__tbody-td">
              Июльский KPI по межкомнатным дверям
            </td>
            <td className="result-block__tbody-td">Александра/Виктория</td>
          </tr>
          <tr>
            <td className="result-block__tbody-td">004</td>
            <td className="result-block__tbody-td">KPI №1</td>
            <td className="result-block__tbody-td">
              Продать складские остатки за премию
            </td>
            <td className="result-block__tbody-td">
              Межкомнатные складские остатки
            </td>
          </tr>
          <tr>
            <td className="result-block__tbody-td">005</td>
            <td className="result-block__tbody-td">KPI №1</td>
            <td className="result-block__tbody-td">
              Июльский KPI по межкомнатным дверям
            </td>
            <td className="result-block__tbody-td">
              Прага/Венге/Классика/Александра/Виктория
            </td>
          </tr>
          <tr>
            <td className="result-block__tbody-td">006</td>
            <td className="result-block__tbody-td">KPI №1</td>
            <td className="result-block__tbody-td">
              Летная мотивация по входным дверям
            </td>
            <td className="result-block__tbody-td">Фурнитура/Дверные ручки</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SearchResultBlock;
