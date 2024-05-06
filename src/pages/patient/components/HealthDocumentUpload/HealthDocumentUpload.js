import React from "react"
import styles from "./healthdocumentupload.module.css";
import "../../../../assets/styles/styles.css";
import { IconButton, Paper } from "@material-ui/core";
import { Delete, DeleteForever, DeleteOutline } from "@material-ui/icons";

const HealthDocumentUpload = ({ files, setFiles }) => {
    
    const handleChange = (e) => {
        if(e.target.files[0] === undefined) {
            return;
        }
        const toAdd = [];
        for(const file of e.target.files) {
            toAdd.push({"file": file, "id": crypto.randomUUID()});
        }
        setFiles([...files, ...toAdd]);
    }

    const deleteFile = (id) => {
        const newFiles = files.filter((file) => file.id !== id)
        setFiles(newFiles);
    }

    return (
        <div className={styles.root}>
            <label htmlFor="input-file" className="hsc-btn-contain" style={{width: "240px", display: "block", textAlign: "center"}}>Select File(s)</label>
            <input type="file" multiple={true} id="input-file" onChange={handleChange} style={{ display: "none" }}/>

            <div className={styles.fileList}>
                {files.map((file) => (
                    <Paper key={file.id} className={styles.file}>
                        <p className={styles.fileName}>{file.file.name}</p>
                        <IconButton className={styles.deleteButton} onClick={() => deleteFile(file.id)}>
                            <Delete />
                        </IconButton>
                    </Paper>
                ))}
            </div>

        </div>
    );
}

export default HealthDocumentUpload;