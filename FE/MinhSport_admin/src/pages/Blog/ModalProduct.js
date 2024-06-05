import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import { fetchAllGroup, createNewUser, updateUser } from '../../services/userService';
import _ from 'lodash'
import { toast } from "react-toastify";

import { fetchAllBlog } from '../../service/adminService';
import { createNewBlog } from '../../service/adminService';
import { updateBlog } from '../../service/adminService';

const ModalProduct = (props) => {
    const defaultUserData = {
        name: '',
        image: '',
        content: ''
    }
    const defaultValidUser = {
        name: true,
        image: true,
        content: true
    }
    const [userData, setUserData] = useState(defaultUserData)
    const [validInput, setValidInput] = useState(defaultValidUser)
    const [dataGroups, setDataGroups] = useState([])

    const fetGroup = async () => {
        let response = await fetchAllBlog()
        if (response && response.data.EC === 0) {
            //     setDataGroups(response.data.DT)
            //     // gan gia tri cho group khi khong chon group mà bam submit (neu khong gan thì gia tri group trong database la null)
            //     if (response.data.DT && response.data.DT.length > 0) {
            //         let groups = response.data.DT
            //         setUserData({ ...userData, group: groups[0].id })
         //   console.log(response)
        }
        // }
    }
    useEffect(() => {
        fetGroup()

    }, [])

    useEffect(() => {

        if (props.action === 'Update') {

            setUserData({ ...props.dataEdit })
            // khi huy hanh dong edit thi dataEdit = {} khi do phai set lai gia tri mac dinh cua group ( truong hop nay group = 3)
            if (_.isEmpty(props.dataEdit)) {
                setUserData({ ...props.dataEdit })
            }
            else {

            }
        }
        // trương hop nay de xoa thong tin form khi nguoi dung nhan "add new user" sau khi da them moi nguoi dung lien truoc do
        // else xay ra khi nhan "save" de them moi nguoi dung
        else {

            setUserData({ ...props.dataEdit })
        }
    }, [props.dataEdit])

    const handleChangeInput = (valueInput, nameInput) => {
        let _userData = _.cloneDeep(userData)
        _userData[nameInput] = valueInput
        setUserData(_userData)

    }
    const handleValidateInput = () => {
        if (props.action === 'Update') {
            return true
        }
        let check = true
        setValidInput(defaultValidUser)
        let properties = ['name', 'image', 'content']
        for (let i = 0; i < properties.length; i++) {
            // kiem tra cac gia tri input tren neu ko có gia tri thì bao loi
            if (!userData[properties[i]]) {
                let _defaultValidUser = _.cloneDeep(defaultValidUser)
                _defaultValidUser[properties[i]] = false
                setValidInput(_defaultValidUser)
                toast.error(`empty ${properties[i]}`)
                check = false
                break;
            }
        }
        return check
    }
    const handleSave = async (userData) => {
        let check = handleValidateInput()
        if (check === true) {
            // comment này để test 
            //     // them thuoc tinh group id bang group de them groupID trong database
            let res = props.action === 'Create' ? await createNewBlog({ ...userData })
                : await updateBlog({ ...userData })
            if (res.data.EC === 0) {
                let _defaultValidUser = _.cloneDeep(userData)
                _defaultValidUser[res.data.DT] = false
                setValidInput(_defaultValidUser)
                toast.error(res.data.EM)
            }
            else {
                toast.success(res.data.EM)
                props.handleCloseModalCreate()
                props.fetchBlogs()
            }
        }
    }

    return (

        <>
            <Modal
                show={props.isShowModalCreate}
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            //onClick={props.handleCloseModalCreate}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {props.action === 'Create' ? 'Create New Blog' : "Edit Curent Product"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='content-body row'>
                        <div className='col-12 col-sm-6 form-group'>
                            <label>Name: </label>
                            <input
                                className={validInput.name ? 'form-control' : 'form-control is-invalid'}
                                type="text"
                                onChange={(e) => handleChangeInput(e.target.value, 'name')}
                                value={userData.name}

                            />
                        </div>
                        <div className='col-12 col-sm-6 form-group'>
                            <label>Image: </label>
                            <input className={validInput.image ? 'form-control' : 'form-control is-invalid'}
                                type="text"
                                onChange={(e) => handleChangeInput(e.target.value, 'image')}
                                value={userData.image}

                            />
                        </div>
                        <div className='col-12 col-sm-6 form-group'>
                            <label>Content: </label>
                            <input className={validInput.content ? 'form-control' : 'form-control is-invalid'}
                                type="text"
                                onChange={(e) => handleChangeInput(e.target.value, 'content')}
                                value={userData.content}
                            />
                        </div>

                        <div className='col-12 col-sm-6 form-group'>

                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleCloseModalCreate}>
                        Cancel
                    </Button>
                    <Button onClick={() => {
                        handleValidateInput()
                        handleSave(userData)
                        //props.handleCloseModalCreate()

                    }}>
                        {props.action === 'Create' ? 'Save' : 'Update'}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ModalProduct