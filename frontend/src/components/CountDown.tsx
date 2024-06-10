import DateTimeDisplay from "./DateTimeDisplay";

type Props = {
  days: number,
  hours: number,
  minutes: number,
  seconds: number
}

const ShowCounter = (props: Props) => {
  return (
    <div className="pt-1 pb-12 flex items-center justify-center w-full font-light text-center tracking-normal only-of-type:!py-0">
      <DateTimeDisplay value={props.days} type={'Days'} isDanger={false} />
      <span className="counttext colonmb text-sm mx-2">:</span>
      <DateTimeDisplay value={props.hours} type={'Hour'} isDanger={false} />
      <span className="counttext colonmb text-sm mx-2">:</span>
      <DateTimeDisplay value={props.minutes} type={'Min'} isDanger={false} />
      <span className="counttext colonmb text-sm mx-2">:</span>
      <DateTimeDisplay value={props.seconds} type={'Secs'} isDanger={false} />
    </div>
  );
};

export default ShowCounter;