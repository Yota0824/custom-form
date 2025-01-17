import React from 'react'

const CompletePage = () => {
    const handleClick = async() =>{
        console.log("test");
        const response = await fetch("http://127.0.0.1:8000/test/");
        const data = await response.json();
        console.log(data);
        };
  return (
    <div>
<button className='bg-blue-500 text-white p-2' onClick={handleClick}>
    TEST

</button>
    </div>
  )
}

export default CompletePage