import { useSelector } from "react-redux";
import Button from "./ui/Button";
import { RootState, useAppDispatch } from "../app/store";
import { increaseAction } from "../app/features/counter/counterSlice";

const Counter = () => {
  const { value, text } = useSelector(({ counter }: RootState) => counter);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h3 className="text-white mb-3">Counter:{value}</h3>
      <Button onClick={() => dispatch(increaseAction(1))}>{text}</Button>
    </div>
  );
};

export default Counter;
