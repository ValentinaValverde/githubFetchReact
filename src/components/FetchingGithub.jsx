import { useState, Fragment } from "react";


export const FetchGithub = () => {

    const [username, setUsername] = useState('')
    const [userData, setUserData] = useState([])



    const getProfile = async () => {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setUserData(data);
        console.log("DATA: ", data);
    }

    const handleChange = (event) => {
        setUsername(event.target.value)
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        getProfile();
    }


    return (

        <>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans&display=swap');
            </style>

            <div className="container">
                <h1 className='largeLetters'>GitHub <br /> User <br /> Info</h1>

                <div className="content">
                    <p>Type in a username to generate info:</p>

                    <form onSubmit={handleSubmit} className="">
                        <input type="text" placeholder="username" onChange={(event) => { handleChange(event) }}></input>
                        <br />
                        <button type="submit">Load Profile</button>
                    </form>

                    <div className="output">
                        <br />
                        <img src={userData.avatar_url}></img>
                        <p>Name: {userData.name}</p>
                        <p>Login: {userData.login}</p>
                        <p>Bio: {userData.bio}</p>
                        <span>Followers: {userData.followers}</span> &nbsp; &nbsp; &nbsp;
                        <span>Following: {userData.following}</span>
                    </div>

                    <form>
                        <button type="submit">Reset</button>
                    </form>


                </div>
            </div>






        </>
    )
}