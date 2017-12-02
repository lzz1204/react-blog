import React, {Component} from "react";
import {Link} from "react-router-dom";
class UserArticals extends Component{
	state = {
		articals:[]
	}
	componentWillMount(){
		fetch("http://localhost:3000/user/article",{
			credentials: "include"
		}).then((res)=>{
			return res.json();
		}).then((data)=>{
			console.log("articalsdata",data);
			this.setState({
				articals:data
			});
		})
	}
	render(){
		return(
			<div>
				<h1>文章列表</h1>
				<ul>
				{
					this.state.articals.map((artical,index)=>{
					return(
						<li key={index}><Link to={"/artical/"+artical._id}>{artical.title}</Link></li>
						)
					})
				}
				</ul>
			</div>
		)
	}
}
export default UserArticals;