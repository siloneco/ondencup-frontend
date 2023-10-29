export default async function getLiveKitToken(roomId: string) {
    const token = localStorage.getItem('token')

    const res = await fetch(`http://${import.meta.env.VITE_BACKEND_HOSTNAME}/api/livekit/token?room=${roomId}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        },
    })

    const data = await res.json()
    return data.token
}