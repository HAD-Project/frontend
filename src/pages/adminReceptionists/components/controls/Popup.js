import React from 'react'
import { Dialog, DialogTitle, DialogContent, makeStyles } from '@material-ui/core';
import ActionButton from './ActionButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
    dialogWrapper: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    },
    dialogTitle: {
        paddingRight: '0px'
    }
}))

export default function Popup(props) {

    const { title, children, openPopup, setOpenPopup } = props;
    const classes = useStyles();

    return (
        <Dialog open={openPopup} maxWidth="md" classes={{ paper: classes.dialogWrapper }}>
            <DialogTitle className={classes.dialogTitle}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ flex: 1, textAlign: 'center' }}>
                        {title}
                    </div>
                    <div>
                        <ActionButton onClick={() => setOpenPopup(false)}>
                            <CloseIcon />
                        </ActionButton>
                    </div>
                </div>
            </DialogTitle>
            <DialogContent >
                {children}
            </DialogContent>
        </Dialog>
    )
}