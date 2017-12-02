import React, { Component } from "react";
import {Link} from "react-router-dom";
 class UserSetting extends Component {
 	render(){
 		return (
 			<div>
 				<h2>用户设置</h2>
 				<ul>
 					<li><Link to="/user/update-password">修改用户密码</Link> </li>
					<li><Link to="/user/update-phone"> 修改用户手机号码</Link> </li>
					<li><Link to="/user/update-avatar"> 修改用户头像</Link> </li>
 				</ul>
 			</div>
 		)
 	}
 }

export default UserSetting;