import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import cn from "classnames";

import Card from "react-bootstrap/Card";
import Layout from "../../components/Layout/Layout";


import styles from "./Post.module.scss";

function Post() {
  const id = useParams().id || ""; 
  const URL = process.env.REACT_APP_URL;
  const [postData, setPostData] = useState({});
  useEffect(() => {
    async function getPostData() {
      const response = await axios.get(
        `${URL}/${id}`
      );
      setPostData(response.data);
    }
    getPostData();
  }, [id, URL]);

  
  return (
    <Layout>
      <div className={cn("innerContent", styles.content)}>
        <Card style={{ width: "300px" }}>
         
          <Card.Body>
            <Card.Title>{postData.title}</Card.Title>
            <Card.Text>{postData.body}</Card.Text>
          </Card.Body>
          
         
        </Card>
      </div>
    </Layout>
  );
}

export default Post;
