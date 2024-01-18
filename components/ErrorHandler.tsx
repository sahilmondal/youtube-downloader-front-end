interface error {
  isError: boolean;
  msg: string;
}
const ErrorHandler = (props: error) => {
  return (
    <div
      className={
        props.isError
          ? "absolute top-2 left-[50%] translate-x-[-50%] transition-all "
          : "absolute top-[-10vh]"
      }
    >
      <div className=" bg-red-800 text-white w-[90vw] h-[10vh] rounded flex justify-center items-center">
        <p>{props.msg}</p>
      </div>
    </div>
  );
};

export default ErrorHandler;
