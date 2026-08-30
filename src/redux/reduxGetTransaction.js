import { useDispatch, useSelector } from "react-redux";
import { getTransactionAxios } from "../axiosHelper/axiosConnection";
import { getTransactionRedux } from "./transactionSlicer";

const dispatch = useDispatch();

export const transData = useSelector((state) => state.storeTransData.transData);

export const getTranctions = async () => {
  try {
    const { status, data } = await getTransactionAxios();
    status === "success" && dispatch(getTransactionRedux(data));
  } catch (error) {
    console.log(error);
  }
};

//   export const getTranctions= async()=>{
//                 dispatch(getTransactionRedux({
//                     await getTranctionsAx()
//                 }))
//   }
