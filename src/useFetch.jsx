const useFetch = (url) => {
    fetch(url)
    .then(res=>res.json())
    .then(data=>console.log(data))

}

export default useFetch