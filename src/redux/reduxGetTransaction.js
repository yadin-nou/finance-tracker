import { useDispatch, useSelector } from "react-redux";
import { getTransactionAxios } from "../axiosHelper/axiosConnection";
import { getTransactionRedux } from "./transactionSlicer";

export const ReduxTransaction = () => {
  const dispatch = useDispatch();

  const transData = useSelector((state) => state.storeTransData.transData);

  const getTranctions = async () => {
    try {
      const { status, data } = await getTransactionAxios();
      status === "success" && dispatch(getTransactionRedux(data));
    } catch (error) {
      console.log(error);
    }
  };
  return { transData, getTranctions };
};
