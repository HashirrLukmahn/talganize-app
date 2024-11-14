import React, { useRef, useState } from 'react'
import QRCode from "react-qr-code";
import { toPng, toSvg } from 'html-to-image';

function ContactUs() {
    const [data, setData] = useState('')

    const inputVal = useRef('')
    const qrRef = useRef('')

    const generate = () => {
        setData(inputVal.current.value)
    }

    const download = async () => {
        if (qrRef.current) {
            const dataUrl = await toPng(qrRef.current);
            const link = document.createElement('a');
            link.href = dataUrl;
            link.download = 'qrcode.png';
            link.click();
        }
    }

    return (
        <div className='w-full h-screen flex flex-col justify-center items-center gap-10'>
            <div>
                <input ref={inputVal} type='text' placeholder='Type anything'
                    className='border border-black outline-none rounded px-5 py-2 mr-5' />
                <button className='bg-blue px-5 py-2 rounded text-white' onClick={generate}>Generate</button>
            </div>

            {data ?
                (
                    <div ref={qrRef} className='max-w-[500px] flex flex-col justify-between items-center bg-red-100 px-5 py-5'>
                        <p className='mb-10 font-bold text-2xl'>Scan QR Code</p>
                        <div className='border-2 border-black-200 p-5'>
                            <QRCode
                                style={{ height: "auto", maxWidth: "200px", width: "200px", }}
                                value={data}
                                bgColor="#fee2e2"
                            />
                        </div>
                    </div>
                )
                : ''}

            {data && <div>
                <button onClick={download} className='bg-blue text-white px-5 py-2 rounded'>Download</button>
            </div>}

        </div>
    )
}

export default ContactUs