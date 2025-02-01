import React from 'react'

const CompletePage = () => {
    const handleClick = async() =>{
        console.log("test");
        

        // GETの場合
        const response = await fetch("http://127.0.0.1:8000/test/?abc=123");

        //POSTの場合
        // const response = await fetch("http://127.0.0.1:8000/test/",{
        //   method:"POST",
        //   headers:{
        //     "Content-Type":"application/json",
        //   },
        //   body: JSON.stringify({message:"test1"}),
        // });

        const data = await response.json();
        console.log(data);
        };
  return (
    <div>
      <div>

<button className='bg-blue-500 text-white p-2' onClick={handleClick}>
    TEST

</button>
      </div>
      <div>

<a href="/post/" className='bg-green-500 text-black p-2'>
POSTにいく</a>
      </div>
    </div>
  )
}

export default CompletePage