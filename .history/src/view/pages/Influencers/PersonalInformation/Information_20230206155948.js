import React from "react";
import Button from "../../../../components/Button/Button";

export default function Information() {
  return (
    <>
      <div className={cx("information")}>
        <p className={cx("information-title")}>Personal Information</p>
        <form className={cx("form")}>
          <div className={cx("form-control-left")}>
            <div className={cx("form-group")}>
              <label className={cx("form-label")}>Your full name *</label>
              <input className={cx("form-input")} type="email" required />
            </div>
            <div className={cx("form-group")}>
              <label className={cx("form-label")}>Your address email *</label>
              <input className={cx("form-input")} type="email" required />
            </div>
            <div className={cx("form-group")}>
              <label className={cx("form-label")}>Your phone number *</label>
              <input className={cx("form-input")} type="email" required />
            </div>
            <div className={cx("form-group")}>
              <label className={cx("form-label")}>Province/City *</label>
              <input className={cx("form-input")} type="email" required />
            </div>
          </div>
          <div className={cx("form-control-right")}>
            <div className={cx("form-group")}>
              <label className={cx("form-label")}>Gender *</label>
              <div className={cx("input-radio")}>
                <input type="radio" required />
                <label>Male</label>
                <input type="radio" required />
                <label>Female</label>
              </div>
            </div>
            <div className={cx("form-group")}>
              <label className={cx("form-label")}>District *</label>
              <input className={cx("form-input")} type="email" required />
            </div>
          </div>
        </form>
        <div className={cx("submit")}>
          <Button primary={true} radius={true} text={true}>
            Continue
          </Button>
        </div>
      </div>
    </>
  );
}