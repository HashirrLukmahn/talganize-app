import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'

function Popup(props) {

    // const [open, setOpen] = useState(true)

    const { open, onClose } = props


    return (
        <Dialog open={open} onClose={onClose} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen bg-transparent  overflow-y-auto">
                <div className="flex w-full min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg md:max-w-[1000px] data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                    >
                        <div className="bg-white md:px-6 pt-5 pb-4 sm:p-6 sm:pb-4 max-h-[700px] overflow-auto">
                            <div className='flex justify-start items-center gap-3 mb-10'>
                                <div className="mx-auto flex md:size-28 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-12">

                                </div>
                                <div className='md:ml-5'>
                                    <p className='text-1xl font-semibold'>Grid Logic Software Private Limited</p>
                                    <p>Bengaluru, Karnataka</p>
                                </div>
                            </div>
                            <div className="sm:flex sm:items-start mb-4">
                                <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                    <DialogTitle as="h3" className="text-2xl font-semibold text-gray-900">
                                        Job Descreption
                                    </DialogTitle>
                                    {/* <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Are you sure you want to deactivate your account? All of your data will be permanently removed.
                                            This action cannot be undone.
                                        </p>
                                    </div> */}
                                </div>
                            </div>
                            <hr className='my-2'></hr>
                            <div className='mb-4'>
                                <table class="table-auto border-collapse border border-slate-400">
                                    <thead className='bg-gray-200'>
                                        <tr>
                                            <th className='border border-slate-300 py-1 px-2'>Job Title</th>
                                            <th className='border border-slate-300 py-1 px-2'>Job Type</th>
                                            <th className='border border-slate-300 py-1 px-2'>Location</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='border border-slate-300 py-1 px-2 text-md'>Sr.Software Engineer</td>
                                            <td className='border border-slate-300 py-1 px-2 text-md'>Full time</td>
                                            <td className='border border-slate-300 py-1 px-2 text-md'>Bangalore</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className='mb-4'>
                                <p className='text-lg font-semibold mb-2'>Job Summary</p>
                                <p>
                                    Josys, a dynamic B2B SaaS platform startup, has embarked on a mission to revolutionize IT operations globally, following an exceptional launch in Japan and securing $218 million in Series A and B funding. Our platform enables businesses to conquer the complexities of work-from-anywhere setups, rapid digital transformation, and the proliferation of SaaS applications by simplifying, optimizing, and securing their IT operations.

                                    With a presence in 9 countries, including Japan, India, and the USA, our cutting-edge product technology center is located in Bengaluru, India. As we continue our rapid expansion, we aim to double our full-time employee headcount in 2024, enhancing our capacity to innovate and deliver.

                                    Josys was spun off from RAKSUL, a celebrated Japanese unicorn and Forbes Startup of the Year 2018, which is a transformation through three pioneering B2B e-commerce platforms.

                                </p>
                            </div>
                            <div className='mb-4'>
                                <p className='text-lg font-semibold mb-2'>Key Responsibilities</p>
                                <ul className='list-disc px-10'>
                                    <li>Develop and maintain React applications with a focus on performance, quality, and scalability.</li>
                                    <li>Ensure code quality through proper practices, including clean coding standards, PR reviews, and meaningful commit messages.</li>
                                    <li>Implement state management solutions and effectively use React Context and other state management tools.</li>
                                    <li>Optimize application performance and ensure high-quality deliverables.</li>
                                    <li>Translate UI/UX designs into responsive, pixel-perfect React components.</li>
                                </ul>
                            </div>
                            <div className='mb-4'>
                                <p className='text-lg font-semibold mb-2'>Qualifications</p>
                                <ul className='list-disc px-10'>
                                    <li>Software Developer: 3 years (Required)</li>
                                    <li>React Developer: 3 years (Required)</li>
                                </ul>
                            </div>
                            <div className='mb-4'>
                                <p className='text-lg font-semibold mb-2'>Benefits</p>
                                <ul className='list-disc px-10'>
                                    <li>Health insurance</li>
                                    <li>Provident Fund</li>
                                </ul>
                            </div>


                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                                type="button"
                                onClick={() => onClose(false)}
                                className="inline-flex w-full justify-center rounded-md bg-green px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-dark sm:ml-3 sm:w-auto"
                            >
                                Apply Now
                            </button>
                            <button
                                type="button"
                                data-autofocus
                                onClick={() => onClose(false)}
                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                            >
                                Cancel
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}
export default Popup