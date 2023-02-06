import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Auth.module.scss";
import { Logo, Saly1 } from "../../";
import Button from "../../../../components/Button/Button";

const cx = classNames.bind(styles);

export default function Auth() {
  return (
    <>
      <div>
        <div className={cx("personalInfor")}>
          <img
            style={{ objectFit: "cover", padding: "30px 20px" }}
            src={Logo}
            alt="LogoB&IBooking"
          />
          <div className={cx("container")}>
            <div className={cx("personalInfor-container")}>
              <div className={cx("block-left")}>
                <p className={cx("personalInfor-title")}>
                  Tell me more about you
                </p>
                <img className={cx("saly1-img")} src={Saly1} alt="Saly1" />
              </div>
              <div className={cx("block-right")}>
                <div className={cx("block-container")}>
                  {/* Call files here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}