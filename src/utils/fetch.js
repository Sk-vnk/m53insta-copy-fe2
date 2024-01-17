export const signupFetch = async (username, email, password) => {
    const response = await fetch("http://localhost:5002/users", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            username: username,
            email: email,
            password: password,
        }),
    });

    const data = await response.json();

    return data;
};
