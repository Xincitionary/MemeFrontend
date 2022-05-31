import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import NotificationList from "../../components/Notification/NotificationList/NotificationList";
import NavbarComp from "../../components/Header/NavbarComp";
import { API_BASE_URL } from "../../utils/constants";
import profile from "./../../images/profilepics/profile.png";
import "./ProfilePage.css";

const TopicPage = () => {
  //   let [userInfo, setUserInfo] = useState([]);

  let [topicInfo, setTopicInfo] = useState([]);
  let { decodeNewline, getUserGender, Notifications, getNotifications } =
    useContext(AuthContext);

  const getDate = (date) => {
    date = date.split("-");
    let ret = date[0] + "年" + date[1] + "月" + date[2] + "日";
    return ret;
  };

  useEffect(() => {
    // let w = document.documentElement.clientWidth || window.innerWidth;
    // if (w <= 750) {
    //   document.body.style.overflow = "auto";
    // } else {
    //   document.body.style.overflow = "hidden";
    // }
    //  document.body.style.overflow = "hidden";
    getNotifications();
    getUserGender();
  }, []);

  return (
    <div>
      <NavbarComp />
      <section className="main-page">
        <div className="left">
          <div className="topicContainer">
            <div className="notificationName">消息提示</div>
          </div>
        </div>

        <div className="right">
          <NotificationList items={Notifications}></NotificationList>
        </div>
      </section>
    </div>
  );
};

export default TopicPage;