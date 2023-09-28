import { useState, Fragment } from "react";

export const FetchGithub = () => {
    const [username, setUsername] = useState('')
    const [userData, setUserData] = useState({})



    const getProfile = async () => {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setUserData(data);
        console.log("DATA: ", data);
    }
    console.log("USERNAME: ", userData);

    const handleChange = (event) => {
        setUsername(event.target.value)
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        getProfile();
    }


    return (
        <>
            <p>Type in a username to generate info:</p>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="username" value="" onChange={(event) => { handleChange(event) }}></input>
                <br />
                <button type="submit">Load Profile</button>
            </form>

        <div className="output">
            <br />
            <img src={userData.avatar_url}></img>
            <p>Name: {userData.name}</p>
            <p>Login: {userData.login}</p>
            <p>Company: {userData.company}</p>
            <p>Location: {userData.location}</p>
            <p>Bio: {userData.bio}</p>
            <p>Followers: {userData.followers}</p>
            <p>Following: {userData.following}</p>
        </div>

            <form>
                <button type="submit">Reset</button>
            </form>


        </>
    )
}