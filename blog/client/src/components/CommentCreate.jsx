import React,{useState} from "react";
import Form from "react-bootstrap/Form";
import axios from 'axios'
import Button from 'react-bootstrap/Button'

function CommentCreate({ postId }) {
  const [content,setContent]=useState('');
  const onSubmit=async(event)=>{
    event.preventDefault();
    await axios.post(`http://localhost:4001/posts/${postId}/comments`,{
        content
    })

    setContent('');
  }

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Label>New Comment</Form.Label>
          <Form.Control type='text' value={content} onChange={e=>setContent(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default CommentCreate;
