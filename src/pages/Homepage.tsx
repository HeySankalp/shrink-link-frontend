import React, { useState } from 'react'
import { linkShrink } from '../api/linkShrink'
import { BsGearFill } from 'react-icons/bs'
import { GrCopy } from 'react-icons/gr'



const Homepage = () => {
    const [url, setUrl] = useState("");
    const [shrinkedUrl, setShrinkedUrl] = useState("");
    const [loading, setLoading] = useState(false);


    const handleLinkShrink = (e: { preventDefault: () => void }) => {
        setLoading(true);
        e.preventDefault();
        let params = {
            longUrl: url,
            onSuccess: onSuccess
        }
        linkShrink(params);
    }

    const onSuccess = (data: any) => {
        setUrl('')
        setLoading(false);
        setShrinkedUrl(data.url);
    }

    const copyTheLink = () => {
        navigator.clipboard.writeText(shrinkedUrl);
        alert("Link copied to clipboard");
    }

    return (
        <div className='App'>
            <div>
                <div className='imgCon'>
                    <img className='img' src="https://shlink.io/images/shlink-logo-blue.svg" alt="" />
                    <h1>Shrink Link</h1>
                </div>
                <form onSubmit={handleLinkShrink} className='form'>
                    <div></div>
                    <input required onChange={(e) => { setUrl(e.currentTarget.value) }} value={url} type="text" placeholder='Enter url to shrink' className='input' />
                    <button onClick={handleLinkShrink}>Shrink</button>
                </form>
                <h3>Your shrinked link 🔗</h3>

                <div className='shrinked'>
                    {
                        shrinkedUrl && <div onClick={copyTheLink} className='copyIco'>
                            <GrCopy />
                        </div>
                    }
                    {
                        shrinkedUrl
                            ? <a  target="_blank" href={shrinkedUrl}>{shrinkedUrl}</a>
                            : loading ? <div className='loadingSec'><BsGearFill className='gear' />Compressing...</div>
                                : <img style={{ objectFit: 'contain', width: '100%', height: '100%' }} src="https://images.vexels.com/media/users/3/146551/isolated/preview/2f475b1c7161650fade2470e02b3f816-square-box-with-package-signs.png" alt="" />
                    }
                </div>
            </div>
        </div>
    )
}

export default Homepage