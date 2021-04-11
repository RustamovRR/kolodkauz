import React from 'react'
import {
    Dialog,
    DialogTitle,
    DialogContent,
    IconButton,
} from "@material-ui/core";
import { useModalStyles } from './modalStyles';
import { Close } from '@material-ui/icons';

export default function Modal({ title, children, open, onClose }) {
    const classes = useModalStyles()

    return (
        <div>
            <Dialog
                maxWidth="lg"
                open={open}
                onClose={onClose}
                style={{
                    position: 'absolute',
                    maxWidth: 1440,
                    top: '30%',
                    width: '100%'
                }}
            >
                <DialogContent>{children}</DialogContent>
            </Dialog>
        </div>
    )
}
