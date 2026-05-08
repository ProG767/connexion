import { useState } from "react";
import { useParams } from "react-router-dom";
import POSTS from "../Post";
import Input from "../components/Inputs";
import Button from "../components/Button";
import Category from "./Category"



export default function Profile() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const  {id} = useParams();

    const save = () =>{
      alert(`${name} - ${email} enregitré`)
    }

   const currentPost = POSTS.find(p => p.id ===Number(id));
    if (!currentPost) return <p>Port introuvable</p>;
    
  return (
    <div className="container py-5" style={{ maxWidth: "500px" }}>
       <h2 className="mb-4">Profile Settings</h2>
        <Input label = "Nom" value={name} onChange={setName} placeholder ="name"/>
        <Input label = "Email" value={email} onChange={setEmail} placeholder ="Email"/>
        <Button label = "envoyer" onClick={save}/>
        {POSTS.map((post)=>(
          <Category key ={post.id} post = {post}/>
        ))}
      
    </div>
  )
}