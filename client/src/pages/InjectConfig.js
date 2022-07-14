import React from 'react'
import {useParams} from "react-router-dom";

export default function InjectConfig({data}) {
  const {id } = useParams();
  const story = data.find(story => story.id==id);


  return (
    <div>InjectConfig</div>
  )
}
