import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
const [blogs, setBlogs] = useState(null);
const [isPending, setIsPending] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
    fetch('http://localhost:8000/blogs')//once this is done then do...
    .then(res => {

        if (!res.ok) {
            throw Error('Could not fetch the required data for the resource');
        }



       return res.json()//we have to do something with the response object in order to get the data
        //now this returns another promise because this also takes some time to do.
    })
    .then(data => { //the function that is going to be executed when the above ^^ function is complete
//now this data is the data that is going to be in the form of JS array
        setBlogs(data);
    //once the data has been loading then we can set the pending statement to false
    //this is not going to cause an infinite loop due to the empty array

    setIsPending(false);   //only execute the function on the initial render. 
    
    setError(null);
    })
    .catch(err => {//catch function executes when there is any kind of network error
        setIsPending(false); //Does not show the loading message once the error is displayed
        setError(err.message); //addressing both the network errors and the fetching resource error       
    }) 


    
}, [])

    return ( 
        <div className="home">
        { error && <div>{error}</div>}
        {isPending && <div>The data is loading...</div>}
        {/* show the loding message when the data is being fetched. */}
        {blogs && <BlogList blogs={blogs} title="ALL BLOGS:"/> }
        </div>
     );
}
 
export default Home;