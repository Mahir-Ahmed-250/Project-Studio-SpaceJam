import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import swal from 'sweetalert';
import { db } from '../../hooks/useFirebase';

function MyVerticallyCenteredModal(props) {
    const [serial, setSerial] = useState(props.team.serial)
    const [name, setName] = useState(props.team.name);
    const [designation, setDesignation] = useState(props.team.designation);
    const [study, setStudy] = useState(props.team.study);
    const [membership, setMembership] = useState(props.team.membership);
    const [baseImage, setBaseImage] = useState(props.team.img);

    const handleSerial = (e) => {
        const result = e.target.value;
        setSerial(result)
    }
    const handleName = (e) => {
        const result = e.target.value;
        setName(result)
    }

    const handleDesignation = (e) => {
        const result = e.target.value;
        setDesignation(result)
    }

    const handleStudy = (e) => {
        const result = e.target.value;
        setStudy(result)
    }

    const handleMembership = (e) => {
        const result = e.target.value;
        setMembership(result)
    }

    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setBaseImage(base64);
    };

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };
    const onClickUpdate = async () => {

        const teamRef = doc(db, "team", props.team.id)
        try {
            if (baseImage && serial && name && designation) {
                await updateDoc(teamRef, {
                    serial: serial,
                    name: name,
                    designation: designation,
                    study: study,
                    membership: membership,
                    img: baseImage
                })

                setSerial(serial);
                setName(name);
                setDesignation(designation);
                setStudy(study);
                setMembership(membership);
                setBaseImage(baseImage);

                swal("Well Done!", "You have successfully Edited the member!", "success", {
                    buttons: {
                        cancel: "Cancel",
                        catch: {
                            text: "Go to Home",
                            value: "catch",
                        },
                    },
                })
                    .then((value) => {
                        switch (value) {
                            case "catch":
                                window.location.href = '/'
                                break;
                            default: ;
                        }
                    });

            }
            else {
                swal({
                    title: "Sorry",
                    text: `Some fields are missing!`,
                    icon: "error",
                    button: "OK",
                });
            }

        }
        catch (err) {
            console.log('err--->', err)
        }
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.team.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <input type="number" id="form3Example3" className="form-control form-control-lg mb-2 w-100"
                        onChange={handleSerial}
                        onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                            }
                        }}
                        defaultValue={props.team.serial}
                        placeholder="Serial" />

                    <input type="text" id="form3Example3" className="form-control form-control-lg mb-2 w-100"
                        onChange={handleName}
                        defaultValue={props.team.name}
                        placeholder="Name" />

                    <input type="text" id="form3Example3" className="form-control form-control-lg mb-2 w-100"
                        onChange={handleDesignation}
                        defaultValue={props.team.designation}
                        placeholder="Designation" />

                    <input type="text" id="form3Example3" className="form-control form-control-lg mb-2 w-100"
                        onChange={handleStudy}
                        defaultValue={props.team.study}
                        placeholder="Study" />

                    <input type="text" id="form3Example3" className="form-control form-control-lg mb-2 w-100"
                        onChange={handleMembership}
                        defaultValue={props.team.membership}
                        placeholder="Membership" />

                    <div className='imgAndDrop'>
                        <div class="file-drop-area" style={{ border: "1px dashed #161616" }}>
                            <span class="choose-file-button" style={{
                                backgroundColor: "rgba(0, 0, 0, 0.6)"
                            }}>Choose files</span>
                            <span class="file-message">or drag and drop files here</span>
                            <input class="file-input" type="file" multiple onChange={(e) => {
                                uploadImage(e);
                            }} />
                        </div>
                        {
                            baseImage ?
                                <img src={baseImage} height="200px" alt="" /> : <img src={props.team.img} height="200px" alt="" />
                        }
                    </div>
                    <button className='loginBtn' onClick={onClickUpdate}>UPDATE</button>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button className="delBtn" onClick={props.onHide}>Close</button>
            </Modal.Footer>
        </Modal>
    );
}

const SingleTeam = ({ team }) => {
    const [modalShow, setModalShow] = React.useState(false);
    const onPressDelete = async (id) => {
        try {
            deleteDoc(doc(db, "team", id))

        }
        catch (err) {
            console.log('err--->', err)
        }
    }
    const onPressDeleteMsg = (id) => {
        swal("Delete Warning!", "Do you really want to Delete this Member?", "warning", {
            buttons: {
                cancel: "NO",
                catch: {
                    text: "YES",
                    value: "catch",
                },
            },
        })
            .then((value) => {
                switch (value) {
                    case "catch":
                        onPressDelete(id)
                        swal("Success!", "You have successfully Delete the Member!", "success");
                        break;
                    default: ;
                }
            });
    }
    return (
        <div key={team.id} className="col-lg-3 col-md-4 mt-5">
            <div className='serialDiv'>
                <span className='ps-2'>{team.serial}</span>
            </div>
            <img src={team.img} alt="" width="100%" height="300px" className='' />

            <button className='delBtn' onClick={() => onPressDeleteMsg(team.id)}>Delete</button>
            <button className='editBtn' onClick={() => setModalShow(true)}>Edit</button>
            <MyVerticallyCenteredModal
                show={modalShow}
                team={team}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
};

export default SingleTeam;