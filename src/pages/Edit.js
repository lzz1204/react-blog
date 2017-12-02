import React, {Component} from "react";

import {Form, Input, Button} from "antd";
import "../css/edit.css";

const FormItem = Form.Item;

class NormalEdit extends Component {
	componentDidMount() {

		window.CKEDITOR.replace("editor", {
			height: 500,	
			filebrowserImageUploadUrl: "/upload",
		});	
	}
	submit(e) {
		e.preventDefault();
		const content = window.CKEDITOR.instances.editor.getData();
		console.log("Content: ", content);
		this.props.form.validateFields((errs, values) => {
			if (!errs) {
				console.log("Values, ", values);
			}
		});
	}
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div className="edit">
				<Form onSubmit={this.submit.bind(this)}>
					<FormItem
					label="标题"
					>
					{getFieldDecorator('title', {
            rules: [{
              required: true, message: '请输入标题!',
            }],
          })(
            <Input />
          )}
					</FormItem>

					<FormItem
						label="编辑框"
					>
            <textarea name="editor" id="editor"/>
					</FormItem>
					<Button type="primary" htmlType="submit">提 交</Button>
				</Form>
			</div>
		)
	}
}

const Edit = Form.create()(NormalEdit);

export default Edit;