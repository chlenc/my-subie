import {RootStore} from "./index";
import {SubStore} from "./SubStore";
import axios from "axios";

export class DataStore extends SubStore {

    constructor(rootStore: RootStore, initState: any) {
        super(rootStore);
    }

    uploadImage = async (name: string, image: string) => {
        const split = image.split('base64,');
        image = split.length === 1 ? split[0] : split[1]
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMG_API_KEY}`
        const res = await axios.post(url, {image}, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
                "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
            }
        })
        console.log(res)
    }

}

function base64ToArrayBuffer(base64: string) {
    var binary_string = window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
}
