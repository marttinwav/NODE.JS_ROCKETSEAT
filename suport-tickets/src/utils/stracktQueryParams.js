export function extractQueryParams(query){
    return query.slice(1)
    .split("&")
    .reduce((queryParams, param)=>{
        const [key, Value] = param.split("=")

        queryParams[key] = Value

        return queryParams
    }, {})
}