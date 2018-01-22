export const load = function* () {
    return yield fetch("/jieguo").then(data=>data.json());
}
export const toupiao = function* (n){
    return yield fetch("/change/"+n).then(data=>data.json());
}