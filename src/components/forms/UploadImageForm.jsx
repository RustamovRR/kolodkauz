import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { request } from '../../services/api';
import { ContextRoot } from '../../contexts';

const UploadImageForm = ({ children, label, className, multiple = true, ...inputProps }) => {
    const { imageUrl, setImageUrl } = useContext(ContextRoot)
    const [openModal, setOpenModal] = useState(false);
    const [image, setImage] = useState('')

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
            .then((res) => setImageUrl(res.data.data))
    }

    // useEffect(() => {
    //     setImageUrl(data)
    // }, [data])
    // console.log(imageUrl)

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Rasm Yuklash
            </Button>
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
                            src={`http://zap.uz/${imageUrl}`}
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