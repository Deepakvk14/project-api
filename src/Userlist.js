import React,{useState,useEffect} from 'react'
import "./Userlist.css";

function Userlist() {
const [image,setImage] = useState([]);
const [next,setNext] = useState([]);
useEffect(()=>{
    const Data= async ()=> {
        let allData=[];
        let allPage=true;
        let currentPage=2;
        try{
            while(allPage){
                
            const user = await fetch(`https://reqres.in/api/users?page=${currentPage}`);
            let {data,total_page} =await user.json();
           data.forEach(element => allData.unshift(element));
           allPage=currentPage<total_page;
            console.log("hello",allData);
            setImage(allData)
            currentPage++
            
            }
        }catch(err){
            console.log(err)
        }

    }
    Data()
},[])
const Next = ()=>{
    setNext(image);
}

   
    return (<div className="box">
    <button type="submit" onClick={Next}>Next</button>
        
            {
                image.map((e)=>{
                    return(<div className="data">

                        <h4>{e.first_name}{e.last_name}</h4>
                        <img src={e.avatar} alt="images"/>
                        <p>{e.email}</p>
                   </div> )
                })
            }
            
            {
                next.map((e)=>{
                    return(<div className="data">

                        <h4>{e.first_name}{e.last_name}</h4>
                        <img src={e.avatar} alt="images"/>
                        <p>{e.email}</p>
                   </div> )
                })
            }
    
  </div>  )
}

export default Userlist
