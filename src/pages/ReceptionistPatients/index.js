import React from 'react'
import "./styles/rec_pat.css"
import ListSearch from '../../components/ListSearch'

const ReceptionistPatients = () => {
  return (
    <div>
        {/* search section */}
        <div>
            <ListSearch/>
        </div>
        {/* patients list */}
        <div>patients list</div>
    </div>
  )
}

export default ReceptionistPatients