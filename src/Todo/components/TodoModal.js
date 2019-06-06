import React from 'react'
import { Modal, Input } from "antd";

export default function TodoModal(props) {
    return (
        <div>
            <Modal
                title="Add/Edit Todo"
                visible={props.todoActionModalVisible}
                onOk={props.handleOk}
                onCancel={props.handleCancel}
            >
                <Input placeholder="Name" allowClear  value={props.selectedTodo.name} onChange={props.handleNameInputChange}/>
                <Input placeholder="Description" allowClear  value={props.selectedTodo.description} onChange={props.handleDescriptionInputChange}/>
            </Modal>
        </div>
    )
}
