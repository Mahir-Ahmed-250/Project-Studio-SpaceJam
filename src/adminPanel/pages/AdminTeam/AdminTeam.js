import { addDoc, collection, onSnapshot, query } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import swal from 'sweetalert';
import { ThemeContext } from '../../../context';
import Nav from '../../../shared/Nav/Nav';
import AdminTitle from '../../components/AdminTitle/AdminTitle';
import { db } from '../../hooks/useFirebase';
import './AdminTeam.css';
import SingleTeam from './SingleTeam';
import loadingImg from '../../../assets/logo/logo.png'

const AdminTeam = () => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    const [serial, setSerial] = useState('')
    const [name, setName] = useState('');
    const [designation, setDesignation] = useState('');
    const [study, setStudy] = useState('');
    const [membership, setMembership] = useState('');
    const [baseImage, setBaseImage] = useState('');
    const [loading, setLoading] = useState(false);

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

    const onClickCreate = async () => {
        setLoading(true)
        try {
            if (baseImage && serial && name && designation) {
                await addDoc(collection(db, 'team'), {
                    serial: serial,
                    name: name,
                    designation: designation,
                    study: study,
                    membership: membership,
                    img: baseImage,
                })
                setSerial('');
                setName('');
                setDesignation('');
                setStudy('');
                setMembership('');
                setBaseImage('');

                swal("Well Done!", "You have successfully Uploaded the team member!", "success", {
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

        catch (error) {
            console.log('error--->', error)
        }
        setLoading(false);
    }

    const [teams, setTeams] = useState([]);
    useEffect(() => {
        //create the query
        const q = query(collection(db, 'team'))
        //create listener
        const teamListenerSubscription = onSnapshot(q, (querySnapShot) => {
            const list = []
            querySnapShot.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id })
            })
            setTeams(list)

        })
        return teamListenerSubscription;
    }, [])
    if (loading) {
        return (
            <>
                <div className='loading-gif'>
                    <img src={loadingImg} alt="" />
                </div>
            </>
        )
    }
    return (
        <>

            <Nav />

            <div style={{ paddingTop: "10%" }} className="container">
                <AdminTitle title="Current Team members" />
                <div className='row'>
                    {
                        teams.sort((a, b) => a.serial - b.serial).map(team => <SingleTeam key={team.id} team={team} />)

                    }
                </div>
                <div className='pb-5' style={{ marginTop: "80px" }}>
                    <AdminTitle title="Upload a new Team member" />
                    <div>
                        <input type="number" id="form3Example3" className="form-control form-control-lg mb-2 w-100"
                            onChange={handleSerial}

                            onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}

                            placeholder="Serial" />
                        <input type="text" id="form3Example3" className="form-control form-control-lg mb-2 w-100"
                            onChange={handleName}
                            placeholder="Name" />

                        <input type="text" id="form3Example3" className="form-control form-control-lg mb-2 w-100"
                            onChange={handleDesignation}
                            placeholder="Designation" />

                        <input type="text" id="form3Example3" className="form-control form-control-lg mb-2 w-100"
                            onChange={handleStudy}
                            placeholder="Study" />

                        <input type="text" id="form3Example3" className="form-control form-control-lg mb-2 w-100"
                            onChange={handleMembership}
                            placeholder="Membership" />

                        <div className='imgAndDrop'>
                            <div class="file-drop-area" style={{ border: darkMode ? "1px dashed #fff" : "1px dashed #161616" }}>
                                <span class="choose-file-button" style={{
                                    backgroundColor: darkMode ? "rgba(0, 0, 0, 0.6)" : "rgba(0, 0, 0, 0.4)"
                                }}>Choose files</span>
                                <span class="file-message">or drag and drop files here</span>
                                <input class="file-input" type="file" multiple onChange={(e) => {
                                    uploadImage(e);
                                }} />
                            </div>
                            <img src={baseImage} height="200px" alt="" />

                        </div>
                        <button className='loginBtn' onClick={onClickCreate}>UPLOAD</button>
                    </div>

                </div>
            </div>
        </>
    );
};

export default AdminTeam;