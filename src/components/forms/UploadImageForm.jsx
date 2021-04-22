import React, { useCallback, useEffect, useState } from 'react';
import { useFormContext } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { AlertSnackbar } from '../shared'
import { request } from '../../services/api';

const UploadImageForm = ({ children, label, className, multiple = true, ...inputProps }) => {
    const [openModal, setOpenModal] = useState(false);
    const [image, setImage] = useState(null)
    const [data, setData] = useState('')

    const handleClickOpen = () => {
        setOpenModal(true);
    };

    const handleClose = () => {
        setOpenModal(false);
    };

    const fileSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('image', image)

        await request.post('/uploads', formData)
            .then((res) => setData(res.data.data))
    }

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Rasm Yuklash
            </Button>
            {/* <AlertSnackbar /> */}
            <form encType="multipart/form-data" >
                <Dialog
                    open={openModal}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogContent>
                        <input
                            name="image"
                            type="file"
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                    </DialogContent>
                    <DialogActions style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }} >
                        <img
                            src={`http://zap.uz/${data}`}
                            alt=""
                            width={300}
                            height={200}
                            style={{ objectFit: 'cover' }}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            onClick={fileSubmit}
                        >
                            Rasm yuklash
                        </Button>
                    </DialogActions>
                </Dialog>
            </form>
        </div>
    );
}

export default UploadImageForm