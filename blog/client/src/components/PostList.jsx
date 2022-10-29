import React,{useState,useEffect} from 'react';
import CommentCreate from './CommentCreate';
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import CommentList from './CommentList';


function PostList() {
  const [posts,setPosts]=useState({})
  const fetchPosts=async()=>{
      const res=await axios.get('http://localhost:4002/posts')
      setPosts(res.data)
  }
  useEffect(()=>{
    fetchPosts()
  },[]);
 const renderedPosts=Object.values(posts).map(post=>{
    return (
        <Col>
        <Card key={post.id} style={{width:'30%' ,marginBottom:'20px'}}>
            <Card.Body>
            <h3>{post.title}</h3>
            </Card.Body>
            <CommentList postId={post.id}/>
            <CommentCreate postId={post.id}/>
        </Card>  
        </Col>
    )
 })

  return (
    <Container>
        {renderedPosts}
    </Container>
  )
}

export default PostList