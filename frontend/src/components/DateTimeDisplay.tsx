type Props = {
  value: number,
  type: string,
  isDanger: boolean
}

const DateTimeDisplay = (props: Props) => {
  return (
    <div className="p-4 flex flex-col justify-center items-center max-w-[4.3rem] max-h-[5rem] rounded-lg border">
      <div className="flex flex-col w-[8vw]">
        <p style={{ fontSize: "1.5em", lineHeight: "2em"}}>{props.value}</p>
        <span style={{ fontSize: "0.8rem", lineHeight: "1em"}}>{props.type}</span>
      </div>
    </div>
  );
};

export default DateTimeDisplay;