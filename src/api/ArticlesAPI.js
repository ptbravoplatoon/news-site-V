export function addArticle(articleObject={}){
    return fetch('http://localhost:3001/api/articles', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(articleObject)
    })
}