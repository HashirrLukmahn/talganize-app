import React, { useRef, useState } from 'react'
import { QRCodeSVG } from "qrcode.react";
import { toPng } from 'html-to-image';

function ContactUs() {
    const [data, setData] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [url, setUrl] = useState('')

    const qrRef = useRef('')

    const generate = () => {
        const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${name}
TEL:${phone}
EMAIL:${email}
URL:${url}
END:VCARD`;

        setData(vCard)
        console.log(vCard);

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
                <div className='flex flex-col gap-4 mb-4'>
                    {/* <input ref={inputVal} type='text' placeholder='Type anything'
                        className='border border-black outline-none rounded px-5 py-2 mr-5' /> */}
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border border-black outline-none rounded px-5 py-2"
                    />
                    <input
                        type="text"
                        placeholder="Phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="border border-black outline-none rounded px-5 py-2"
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-gray-300 rounded px-4 py-2"
                    />
                    <input
                        type="url"
                        placeholder="Website URL"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="border border-gray-300 rounded px-4 py-2"
                    />
                </div>

                <button className='bg-blue px-5 py-2 rounded text-white' onClick={generate}>Generate</button>
            </div>

            {data ?
                (
                    <div ref={qrRef} className='max-w-[500px] flex flex-col justify-between items-center bg-red-100 px-5 py-5'>
                        <p className='mb-10 font-bold text-2xl'>Scan QR Code</p>
                        <div className='border-2 border-black-200 p-5'>
                            <QRCodeSVG
                                style={{ height: "auto", maxWidth: "200px", width: "200px", }}
                                renderAs="canvas"
                                size="400"
                                value={data}
                                title='Scan code'
                                bgColor='#FEE2E2'
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