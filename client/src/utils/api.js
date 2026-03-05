export default async function api(path) {
    try {
        let data = await fetch(path)
        data = await data.json()
        return (data);

    } catch (err) {
        console.log(err);
    }
}

