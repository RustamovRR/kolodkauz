import React, { useEffect, useState } from 'react';
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

const UploadImageForm = () => {
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState(null)
    const [data, setData] = useState('')
    // const { register, unregister, setValue } = useFormContext();

    // const onDrop = useCallback(
    //     (droppedFiles) => {
    //         setValue(inputProps.name, droppedFiles, { shouldValidate: true });
    //     },
    //     [setValue, inputProps.name]
    // );

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    //     accept: inputProps.accept,
    //     noClick: true,
    //     noKeyboard: true,
    //     multiple,
    //     onDrop,
    //     maxSize
    // });

    // useEffect(() => {
    //     register(inputProps.name);
    //     return () => {
    //         unregister(inputProps.name);
    //     };
    // }, [register, unregister, inputProps.name]);

    const fileSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('image', image)

        await request.post('/uploads', formData)
            .then((res) => setData(res.data.data))
    }

    console.log(data)

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Rasm Yuklash
            </Button>
            {/* <AlertSnackbar /> */}
            <form encType="multipart/form-data" onSubmit={fileSubmit}>
                <Dialog
                    open={open}
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
                        {/* <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            {children({ acceptedFiles, open })}
                        </div> */}
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