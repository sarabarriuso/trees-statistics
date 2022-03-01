import Slider from '@mui/material/Slider';
interface IMonthSelectorProps {
  description: string;
  defaultYear: number;
  minYear?: number;
  yearSelectedCallback: (value: number) => void;
}
const MonthSelector: React.FC<IMonthSelectorProps> = ({
  description,
  defaultYear,
  minYear,
  yearSelectedCallback,
}) => {
  const DEFAULT_CLASSNAME = 'year-selector';

  const handleChange = (
    _event: Event | React.SyntheticEvent<Element, Event>,
    value: number | number[],
  ) => {
    yearSelectedCallback(value as number);
  };

  const marks = [];
  for (let i = 2019; i <= new Date().getFullYear(); i++) {
    marks.push({ value: i, label: i.toString() });
  }

  return (
    <div className={DEFAULT_CLASSNAME}>
      <p>{description}</p>
      <Slider
        aria-label='Day'
        defaultValue={defaultYear}
        track={false}
        valueLabelDisplay='auto'
        step={1}
        marks={marks}
        min={minYear || 2019}
        max={new Date().getFullYear()}
        onChangeCommitted={handleChange}
      />
    </div>
  );
};

export default MonthSelector;
