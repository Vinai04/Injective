import React from 'react'
import { useParams } from "react-router-dom";

const LendWithConfidence = () => {

    let { id } = useParams();
    
  return (
    <div>Lend {id} </div>
  )
}

export default LendWithConfidence