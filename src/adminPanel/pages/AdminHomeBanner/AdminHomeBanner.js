import { addDoc, collection, deleteDoc, doc, onSnapshot, query } from 'firebase/firestore';
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import swal from 'sweetalert';
import { ThemeContext } from '../../../context';
import Nav from '../../../shared/Nav/Nav';
import AdminTitle from '../../components/AdminTitle/AdminTitle';
import { db } from '../../hooks/useFirebase';
import './AdminHomeBanner.css';
import loadingImg from '../../../assets/logo/logo.png'
import LoadingSkeletonBanner from '../../components/LoadingSkeletonBanner/LoadingSkeletonBanner';
import AdminNavigation from '../../components/AdminNavigation/AdminNavigation';

const AdminHomeBanner = () => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    const [baseImage, setBaseImage] = useState("");
    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);

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
            if (baseImage) {
                await addDoc(collection(db, 'homeBanner'), {
                    img: baseImage,
                })
                setBaseImage('');

                swal("Well Done!", "You have successfully Uploaded the Home Banner!", "success", {
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
                    text: `No Image Found!`,
                    icon: "error",
                    button: "OK",
                });
            }
        }

        catch (error) {
            console.log('error--->', error)
        }
        setLoading(false)
    }

    const [banners, setBanners] = useState([]);
    useEffect(() => {
        setLoading2(true)
        //create the query
        const q = query(collection(db, 'homeBanner'))
        //create listener
        const bannerListenerSubscription = onSnapshot(q, (querySnapShot) => {
            const list = []
            querySnapShot.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id })
            })
            setBanners(list)
            setLoading2(false)
        })
        return bannerListenerSubscription;
    }, [])


    const onPressDelete = async (id) => {
        try {
            deleteDoc(doc(db, "homeBanner", id))

        }
        catch (err) {
            console.log('err--->', err)
        }
    }
    const onPressDeleteMsg = (id) => {
        swal("Delete Warning!", "Do you really want to Delete this Banner?", "warning", {
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
                        swal("Success!", "You have successfully Deleted the Banner!", "success");
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

            <div style={{ paddingTop: "12%" }} className="container">
                <AdminTitle title="Current Home Banners" />

                <AdminNavigation />
                {
                    loading2 ? <>
                        <LoadingSkeletonBanner />
                    </> : <div className='row'>
                        {
                            banners.map(banner => <div key={banner.id} className="col-lg-4 col-md-6 mb-4">
                                <img src={banner.img} alt="" width="100%" height="250px" className='' />
                                <button className='delBtn' onClick={() => onPressDeleteMsg(banner.id)}>Delete</button>
                            </div>)
                        }
                    </div>
                }
                <div className='pb-5' style={{ marginTop: "80px" }}>
                    <AdminTitle title="Upload a new Home Banner" />
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

        </>
    );
};

export default AdminHomeBanner;