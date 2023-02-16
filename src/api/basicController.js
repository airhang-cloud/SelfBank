import service from "../utils/request";
const module = "/mine"
export function getInfos(){
    return service({
        url: `${module}/infos`
    })
}
