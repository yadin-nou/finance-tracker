import React from "react";
import { MdAccountBalance } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { TbMoneybagMove } from "react-icons/tb";
export const InformationLayout = ({ balance, income, expanse }) => {
  return (
    <>
      <div>
        <h4>Information</h4>
        <div className="d-flex justify-content-between  flex-wrap  text-dark rounded">
          <div
            className="d-flex flex-column align-items-center justify-content-center text-center border bg-white text-warning rounded shadow"
            style={{ width: "30%" }}
          >
            <MdAccountBalance style={{ fontSize: "4rem", color: "yellow" }} />
            <h6>Balance</h6>
            <p style={{ fontSize: "1.5rem" }}>$ {balance}</p>
          </div>
          <div
            className="d-flex flex-column align-items-center justify-content-center text-center border bg-white text-success rounded shadow"
            style={{ width: "30%" }}
          >
            <GiReceiveMoney style={{ fontSize: "4rem" }} />
            <h6>Income</h6>
            <p style={{ fontSize: "1.5rem" }}>$ {income}</p>
          </div>
          <div
            className="d-flex flex-column align-items-center justify-content-center text-center border bg-white text-danger rounded shadow"
            style={{ width: "30%" }}
          >
            <TbMoneybagMove style={{ fontSize: "4rem" }} />
            <h6>Expanse</h6>
            <p style={{ fontSize: "1.5rem" }}>$ {expanse}</p>
          </div>
        </div>
      </div>
    </>
  );
};
