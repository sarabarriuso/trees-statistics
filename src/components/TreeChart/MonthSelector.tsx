import Slider from '@mui/material/Slider';

interface IMonthSelectorProps {
  description: string;
  defaultMonth: number;
  monthSelectedCallback: (value: number) => void;
}
const MonthSelector: React.FC<IMonthSelectorProps> = ({
  description,
  defaultMonth,
  monthSelectedCallback,
}) => {
  const DEFAULT_CLASSNAME = 'month-selector';

  const marks = [
    {
      value: 1,
      label: 'Jan',
    },
    {
      value: 2,
      label: 'Feb',
    },
    {
      value: 3,
      label: 'Mar',
    },
    {
      value: 4,
      label: 'Apr',
    },
    {
      value: 5,
      label: 'May',
    },
    {
      value: 6,
      label: 'Jun',
    },
    {
      value: 7,
      label: 'Jul',
    },
    {
      value: 8,
      label: 'Aug',
    },
    {
      value: 9,
      label: 'Sep',
    },
    {
      value: 10,
      label: 'Oct',
    },
    {
      value: 11,
      label: 'Nov',
    },
    {
      value: 12,
      label: 'Dec',
    },
  ];

  const handleChange = (
    _event: Event | React.SyntheticEvent<Element, Event>,
    value: number | number[],
  ) => {
    monthSelectedCallback(value as number);
  };

  return (
    <div className={DEFAULT_CLASSNAME}>
      <p>{description}</p>
      <Slider
        aria-label='Day'
        defaultValue={defaultMonth}
        track={false}
        valueLabelDisplay='auto'
        step={1}
        marks={marks}
        min={1}
        max={12}
        onChangeCommitted={handleChange}
      />
    </div>
  );
};

export default MonthSelector;
