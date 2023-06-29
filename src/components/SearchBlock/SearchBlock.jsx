import React, { useState } from 'react';
import './SearchBlock.scss';
import Input from '../Input/Input';
import Select, { components } from 'react-select';
import SearchResultBlock from './SearchResultBlock/SearchResultBlock';
import ShowMoreButton from '../Buttons/ShowMoreButton/ShowMoreButton';

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
  const [isSearchResultBlockOpen, setIsSearchResultBlockOpen] = useState(false);

  const handleSelectOption = (e) => {
    setSelectOption(e);
  };

  const handleOpenSearchResultBlock = () => {
    setIsSearchResultBlockOpen(!isSearchResultBlockOpen);
  };

  return (
    <section className="search-block__wrapper">
      <div className="search-block">
        <Select
          className="search-block__select"
          classNamePrefix="search-block__select-prefix"
          options={options}
          value={selectOption}
          onChange={(e) => handleSelectOption(e)}
          unstyled={true}
          components={{ DropdownIndicator }}
          name="search-select"
        />
        <div className="search-block__container">
          <Input placeholder={'Поиск задач...'} />
          <ShowMoreButton
            handleButtonClick={handleOpenSearchResultBlock}
          />
        </div>
      </div>
      {isSearchResultBlockOpen ? <SearchResultBlock /> : ''}
    </section>
  );
};

const DropdownIndicator = (props) => (
  <components.DropdownIndicator {...props}>
    <span className="search-block__select-dropdown-indicator" />
  </components.DropdownIndicator>
);

export default SearchBlock;
