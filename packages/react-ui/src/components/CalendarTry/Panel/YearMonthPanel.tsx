import * as React from 'react';
import { ButtonWithTooltip } from '#src/components/CalendarTry/Panel/PanelButton';
import { PanelDate, YearWithTooltip } from '#src/components/CalendarTry/Panel/PanelDate';
import { differenceYears } from '#src/components/CalendarTry/utils';
import type { YearMonthPanelProps } from '#src/components/CalendarTry/Panel/interfaces';

export const YearMonthPanel = ({
  viewMode,
  date,
  minDate,
  maxDate,
  locale,
  onNext,
  onPrevious,
  onYearsViewShow,
  onYearsViewHide,
}: YearMonthPanelProps) => {
  const yearsView = viewMode === 'YEARS';

  const previousDisabled = !!minDate && differenceYears(minDate, date.subtract(1, 'year')) > 0;
  const nextDisabled = !!maxDate && differenceYears(date.add(1, 'year'), maxDate) > 0;

  const yearMouseDownHandle = (event: any) => {
    event.preventDefault();
    yearsView ? onYearsViewHide(event) : onYearsViewShow(event);
  };

  return (
    <>
      {!previousDisabled && (
        <ButtonWithTooltip
          disabled={false}
          type={'left'}
          onMouseDown={onPrevious}
          renderContent={() => locale.backwardText}
        />
      )}
      <PanelDate>
        <YearWithTooltip
          renderContent={() => (yearsView ? locale.returnText : locale.selectYearText)}
          view={yearsView}
          onMouseDown={yearMouseDownHandle}
        >
          {date.format('YYYY')}
        </YearWithTooltip>
      </PanelDate>
      {!nextDisabled && (
        <ButtonWithTooltip
          disabled={false}
          type={'right'}
          onMouseDown={onNext}
          renderContent={() => locale.forwardText}
        />
      )}
    </>
  );
};
