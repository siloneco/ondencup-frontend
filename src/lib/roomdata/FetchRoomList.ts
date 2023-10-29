export default async function fetchRoomList(token: string) {
    let i = 0;
    const result = []

    while (true) {
        let res
        try {
            res = await fetch("http://" + import.meta.env.VITE_BACKEND_HOSTNAME + "/api/room/offset/" + i, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/json'
                },
            })
        } catch (err) {
            console.log(err)
            break
        }

        const data = (await JSON.parse(`{"data": ${await res.text()}}`)).data
        if (data.length === 0) {
            break
        }

        result.push(...data)

        i += 1
    }

    return result
}