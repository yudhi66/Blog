import { useEffect,useState } from "react"
import appwriteService from "../appwrite/config"
import { Container,PostCard } from "../components"

function Home() {
    const [posts,setPosts]=useState([])

    useEffect(()=>{
       appwriteService.getPosts().then((posts)=>{
        if(posts){
            setPosts(posts.documents)
        }
       })
    },[])

  if(posts.length===0){
        return (
            <Container>
 
         <div className="flex flex-wrap">
           <div className="p-2 w-full">

            <h1 className="text-2xl font-bold hover:text-gray-500">

                   Login to read posts
            </h1>



           </div>



         </div>


            </Container>
        )
  }

  return(
    <div className="w-full py-8">
          <Container>
        {posts.map((post)=>(
        <div key={post.$id} className="p-2 w-1/4">
            <PostCard {...post}/>
        </div>

        ))}       
  

            
          </Container>


    </div>
  )
   
}

export default Home
