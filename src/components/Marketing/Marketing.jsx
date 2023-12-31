import React, { useEffect, useState } from 'react';
import './Marketing.scss';
import { marketingItems } from '../../utils/constants';
import MarketingHeader from './MarketingHeader/MarketingHeader';
import MarketingContent from './MarketingContent/MarketingContent';

const Marketing = () => {
  const [dates, setDates] = useState({ from: '', to: '' });
  const [filters, setFilters] = useState({
    from: '1900 01 01',
    to: '2099 01 01',
    search: '',
    radio: 'all',
  });
  const [marketing, setMarketing] = useState(marketingItems);

  const REGEXP = new RegExp(
    '^(3[01]|[12][0-9]|0?[1-9])(\\.)(1[0-2]|0?[1-9])\\2[0-9]{4}$',
  );

  useEffect(() => {
    //filtering
    if (filters.from || filters.to || filters.search) {
      let radioFiltered = [];
      if (filters.radio === 'Все') {
        radioFiltered = marketingItems;
      } else if (filters.radio === 'Активные') {
        radioFiltered = marketingItems.filter((item) => {
          return new Date(item.dateEnd) > Date.now();
        });
      } else {
        radioFiltered = marketingItems.filter((item) => {
          return new Date(item.dateEnd) < Date.now();
        });
      }
      setMarketing(
        radioFiltered.filter((item) => {
          return (
            +new Date(item.dateEnd) > Date.parse(filters.from) &&
            +new Date(item.dateEnd) < Date.parse(filters.to) &&
            item.name.includes(filters.search)
          );
        }),
      );
    }
  }, [filters, marketingItems]);

  const setDatesFilters = (event, dateFilter) => {
    if (event.currentTarget.id === dateFilter) {
      setDates({ ...dates, [dateFilter]: event.currentTarget.value });
      if (REGEXP.test(event.currentTarget.value)) {
        setFilters({
          ...filters,
          [dateFilter]: event.currentTarget.value
            .split('.')
            .reverse()
            .join(' '),
        });
      } else if (!event.currentTarget.value) {
        const dateFilterValue = dateFilter === 'from' ? '1900 01 01' : '2099 01 01';
        setFilters({
          ...filters,
          [dateFilter]: dateFilterValue,
        });
      }
    }
  };

  const handleInputChange = (event) => {
    setDatesFilters(event, 'from');
    setDatesFilters(event, 'to');
  };

  return (
    <section className='marketing-container'>
      <MarketingHeader
        dates={dates}
        setDates={setDates}
        filters={filters}
        setFilters={setFilters}
        handleInputChange={handleInputChange}
      />
      <MarketingContent marketing={marketing} />
    </section>
  );
};
export default Marketing;
