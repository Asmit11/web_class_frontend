import React, { useEffect } from 'react';
import { testApi } from '../../apis/Api';

const Homepage = () => {

    // Print Hello !, when page load (automatic)
    useEffect(() => {
        console.log("Hello!!!")

        // trigger testAPI
        testApi().then((res) => {
            console.log(res) //Test api is working
        })
    })

    return (
        <div>
            Homepage!!!!!
        </div>

    )
}
export default Homepage;