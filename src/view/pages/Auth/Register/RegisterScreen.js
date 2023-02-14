import { Fragment, useState } from "react";
import classNames from "classnames/bind";
import styles from "../Auth.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLockOpen,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../../components/Button/Button";
import { Link,useNavigate } from "react-router-dom";
// ----------------------------------------------------------------
import { useDispatch, useSelector } from "react-redux";
import { addNewUser } from "../../../../api/feature";
import { registerAction } from "../../../../features/feature/register";
import useAuth from "../../../../hooks/useAuth";
// ------------------------------------------------------------------
const cx = classNames.bind(styles);

const RegisterScreen = () => {
  const navigation = useNavigate();

  const {
    width,
    right,
    lock,
    lock2,
    setWidth,
    showPassword,
    setRight,
    showConfirmPassword,
    handleLockClose,
    handleLockOpen,
    handleLock,
    handleUnLock
  } = useAuth();
  const [data, setData] = useState({
    username:"",
    email: "",
    password: "",
    password_confirmation: "",
    role_id: "",
  });
  const handleToggleRight = (e) => {
    setWidth("105px");
    setRight("0px");
    setData({...data, role_id:e.target.value})
  };
  const handleToggleLeft = (e) => {
    setWidth("81px");
    setRight("103px");
    setData({...data, role_id:e.target.value})
  };
  const dispatch = useDispatch();
  const onAddNewUser = async (data) => {
    try {
      const res = await addNewUser(data);
      dispatch(registerAction.addOne(data));
      navigation("/verification");

    } catch (error) {
      console.log('onAddNewUser   error', error);
    }
  };
  const addUser = () => {
    if (!data) {
      console.log('error')
      alert('No User!', 'You need to enter data');
    } else {
      onAddNewUser(data)
      console.log('sucess')

    }
  };
  return (
    <Fragment>
      <div className={cx("choose-role")}>
        <div style={{ width: width, right: right }} className={cx("btn")}></div>
        <button
          type="button"
          className={cx("toggle-btn")}
          onClick={handleToggleLeft}
          value="1"
        >
          Brand
        </button>
        <button
          type="button"
          className={cx("toggle-btn")}
          onClick={handleToggleRight}
          value="2"
        >
          Influencer
        </button>
      </div>

      <h2>Create account!</h2>
      <div>
        <div className={cx("form")}>
          <label>User name</label>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <input type="text" placeholder="Enter user" name="user" value={data.username} onChange={(e)=>setData({...data,username:e.target.value})}/>
        <hr />
        <div className={cx("form")}>
          <label>Email</label>
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <input type="email" placeholder="Enter email" name="email" value={data.email} onChange={(e)=>setData({...data,email:e.target.value})}/>
        <hr />
        <div className={cx("form")}>
          <label>Password</label>
          <FontAwesomeIcon
            icon={faLock}
            onClick={handleLockOpen}
            style={{ display: lock === "none" ? "block" : "none" }}
          />
          <FontAwesomeIcon
            icon={faLockOpen}
            style={{ display: lock }}
            onClick={handleLockClose}
          />
        </div>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter Password"
          name="password"
          value={data.password} onChange={(e)=>setData({...data,password:e.target.value})}
        />
        <hr />
        <div className={cx("form")}>
          <label>Confirm Password</label>
          <FontAwesomeIcon
            icon={faLock}
            onClick={handleLock}
            style={{ display: lock2 === "none" ? "block" : "none" }}
          />
          <FontAwesomeIcon
            icon={faLockOpen}
            style={{ display: lock2 }}
            onClick={handleUnLock}
          />
        </div>
        <input
          type={showConfirmPassword ? "text" : "password"}
          placeholder="Enter Password"
          name="password"
          value={data.confirmPassword} onChange={(e)=>setData({...data,password_confirmation:e.target.value})}
        />
        <hr />
      </div>
      <div>
        <Button primary={true} className={cx("btn-submit")} onClick={addUser}>
          Register
        </Button>
      </div>
      <div className={cx("status-account")}>
        <p>Already have an account?</p>
        <Link to="/login">
          <h4 style={{cursor:'pointer'}}>Log in here!</h4>
        </Link>
      </div>
    </Fragment>
  );
};


export default RegisterScreen;
