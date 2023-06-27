import React, { useState } from 'react';
import './SearchBlock.scss';
import Input from '../Input/Input';
import Select, {components} from 'react-select';

const options = [
  {
    value: 'Текущий KPI и мотивация',
    label: 'Текущий KPI и мотивация',
  },
  {
    value: 'Другой KPI',
    label: 'Другой KPI',
  },
  {
    value: 'Третий KPI',
    label: 'Третий KPI',
  },
];

const SearchBlock = () => {
  const [selectOption, setSelectOption] = useState(options[0]);

  const handleSelectOption = (e) => {
    setSelectOption(e);
  };

  return (
    <div className='search-block'>
      <Select
        className='search-block__select'
        classNamePrefix='search-block__select-prefix'
        options={options}
        value={selectOption}
        onChange={(e) => handleSelectOption(e)}
        unstyled={true}
        components={{DropdownIndicator}}
        name='search-select'
      />
      <div className='search-block__container'>
        <Input
          placeholder={'Поиск задач...'}
        />
        <button className='search-block__button'>
          Подробнее
          <span className='search-block__button-right-arrow' />
        </button>
      </div>
    </div>
  );
};

const DropdownIndicator = (props) => (
    <components.DropdownIndicator {...props}>
      <span className='search-block__select-dropdown-indicator' />
    </components.DropdownIndicator>
  );

export default SearchBlock;
