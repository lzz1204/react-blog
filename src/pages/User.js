import React , {Component} from "react";
import { Row, Col,Card, Button } from "antd";
import {Route, Link} from "react-router-dom";
import  UserSetting  from "./UserSetting";
import  UserArticals  from  "./UserArticals";
 import "../css/user.css";
 	const imgs={img:"imgs/01.jpg"}
class User extends Component {
	state = {
		user: {}
	}
	componentWillMount() {
		if (this.props.location.state) {
			this.setState({user: this.props.location.state});
		}	else {
			fetch("http://localhost:3000/user", {
				credentials: "include"
			}).then((res) => {
				return res.json();
			}).then((data) => {
				console.log(data);
				if (data.OK === false) {
					return this.props.history.push("/login");
				};
				this.setState({
					user: data
				})
			})
		};
	}	
	render(){
		const user = this.props.location.state;
		
		console.log("user", user);
		return (
			<div className="user">
				<Row>
			      <Col span={8}>
			      	 <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
					    <div className="image">
					      <img alt="头像" width="100%" src={imgs.img} />
					    </div>
					    <div className="info">
					      <h1> 用户名： {user.username} </h1>
					      <h3>创建时间:{user.createAt}</h3>
					     <Link to="/user/setting">
					      <Button>用户设置</Button>
					      </Link>
					       <br/>	
					      <Link to="/user/article"><Button>我的文章</Button></Link>	     
					    </div>
				  	</Card>
			      </Col>
			      <Col span={16}>
			      	<h1>用户右边脸</h1>
			      	<Route  path="/user/setting" component={UserSetting}/>
			      	<Route  path="/user/article" component={UserArticals}/>
			      </Col>
			    </Row>
			</div>
		)
	}
}
export default User;