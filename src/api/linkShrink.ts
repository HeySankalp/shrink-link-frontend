import axios from "axios";


interface paramType {
    longUrl: string;
    onSuccess: (arg:any)=>void
}

export function linkShrink(params: paramType) {

    const { longUrl, onSuccess } = params;


    axios({
        method: 'POST',
        "url": "https://lrink.vercel.app/short",
        "data": {
            "full":longUrl
        }
    }).then(response => {
        onSuccess(response.data)

    }).catch((err) => {
        console.log(err);
    })
}