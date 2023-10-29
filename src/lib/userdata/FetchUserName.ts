export default async function fetchUserName(token: string) {
    const res = await fetch("http://" + import.meta.env.VITE_BACKEND_HOSTNAME + "/api/user/name", {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
    })

    const data = await res.json()
    return data.user_name
}