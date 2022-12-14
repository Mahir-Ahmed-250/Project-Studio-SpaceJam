import { addDoc, collection, deleteDoc, doc, onSnapshot, query } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import swal from 'sweetalert';
import { ThemeContext } from '../../../context';
import Nav from '../../../shared/Nav/Nav';
import AdminTitle from '../../components/AdminTitle/AdminTitle';
import { db } from '../../hooks/useFirebase';
import loadingImg from '../../../assets/logo/logo.png';
import LoadingSkeletonBanner from '../../components/LoadingSkeletonBanner/LoadingSkeletonBanner';
import AdminNavigation from '../../components/AdminNavigation/AdminNavigation';


const AdminHomePortfolio = () => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    const [portfolios, setPortfolios] = useState([]);
    const [baseImage, setBaseImage] = useState('');
    const [serial, setSerial] = useState('')
    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);

    const handleSerial = (e) => {
        const result = e.target.value;
        setSerial(result)
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
            if (baseImage && serial) {
                await addDoc(collection(db, 'homePortfolio'), {
                    serial: serial,
                    img: baseImage,
                })
                setSerial('');
                setBaseImage('');

                swal("Well Done!", "You have successfully Uploaded the Portfolio!", "success", {
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

                                window.location.href = '/home'

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

    useEffect(() => {
        setLoading2(true)
        //create the query
        const q = query(collection(db, 'homePortfolio'))
        //create listener
        const portfolioListenerSubscription = onSnapshot(q, (querySnapShot) => {
            const list = []
            querySnapShot.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id })
            })
            setPortfolios(list)
            setLoading2(false)
        })
        return portfolioListenerSubscription;
    }, [])


    const onPressDelete = async (id) => {
        try {
            deleteDoc(doc(db, "homePortfolio", id))

        }
        catch (err) {
            console.log('err--->', err)
        }
    }
    const onPressDeleteMsg = (id) => {
        swal("Delete Warning!", "Do you really want to Delete this Portfolio?", "warning", {
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
                        swal("Success!", "You have successfully Delete the Portfolio!", "success");
                        break;
                    default: ;
                }
            });
    }


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
            <div style={{ paddingTop: "10%" }} className='container'>
                <AdminTitle title="Current Home Portfolios" />
                <AdminNavigation />
            </div>
            <div className="container">
                {
                    loading2 ? <>
                        <LoadingSkeletonBanner />
                    </> : <div className='row'>
                        {
                            portfolios.sort((a, b) => a.serial - b.serial).map(portfolio => <div key={portfolio.id} className="col-lg-4 col-md-6 mb-4">
                                <div className='serialDiv'>
                                    <span className='ps-2'>{portfolio.serial}</span>
                                </div>
                                <img src={portfolio.img} alt="" width="100%" height="250px" className='' />
                                <button className='delBtn' onClick={() => onPressDeleteMsg(portfolio.id)}>Delete</button>
                            </div>)
                        }
                    </div>
                }
                <div className='pb-5' style={{ marginTop: "80px" }}>
                    <AdminTitle title="Upload a new Home Portfolio" />
                    <div>
                        <input type="number" id="form3Example3" className="form-control form-control-lg mb-4 w-25"
                            onChange={handleSerial}

                            onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}

                            placeholder="Serial" />


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

export default AdminHomePortfolio;