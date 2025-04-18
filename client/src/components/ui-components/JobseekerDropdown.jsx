import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Bookmark, BriefcaseBusiness, LogOut, UserCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import * as Constants from '../../app-routes/Constants'
const JobseekerDropdown = () => {


    const navigate = useNavigate()

    const navigateTo = (path) => {
        navigate(path)
    }

    return (
        <div className="relative inline-block text-right">
            <Menu>
                <MenuButton className="inline-flex items-center gap-2 bg-tal rounded-md text-md font-semibold text- shadow-inner shadow-white/10 focus:outline-none ">
                    <UserCircle size={28} className="w-6 h-6 text-talgan-green" />
                    Praveen
                </MenuButton>

                <MenuItems
                    transition
                    className="absolute bg-yellow right-0 w-52 mt-2 origin-top-right rounded-xl border border-white/5  p-1 text-sm text- shadow-lg focus:outline-none"
                >
                    <MenuItem>
                        {({ active }) => (
                            <button
                                className={`group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 ${active ? "bg-talgan-green text-yellow" : ""

                                    }`}
                                onClick={(e) => navigateTo(Constants.Profile)}
                            >
                                <UserCircle className="w-4 h-4 fill-white/30" />
                                Edit Profile
                            </button>
                        )}
                    </MenuItem>
                    <MenuItem>
                        {({ active }) => (
                            <button
                                className={`group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 ${active ? "bg-talgan-green text-yellow" : ""
                                    }`}
                                onClick={(e) => navigateTo(Constants.SavedJobs)}
                            >
                                <Bookmark className="w-4 h-4 fill-white/30" />
                                Saved Jobs
                            </button>
                        )}
                    </MenuItem>
                    <MenuItem>
                        {({ active }) => (
                            <button
                                className={`group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 ${active ? "bg-talgan-green text-yellow" : ""
                                    }`}
                                onClick={(e) => navigateTo(Constants.JobPost)}
                            >
                                <BriefcaseBusiness className="w-4 h-4 fill-white/30" />
                                Post job
                            </button>
                        )}
                    </MenuItem>
                    <div className="my-1 h-px bg-white/5" />
                    <MenuItem>
                        {({ active }) => (
                            <button
                                className={`group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 ${active ? "bg-talgan-green text-yellow" : ""
                                    }`}
                            >
                                <LogOut className="w-4 h-4 fill-transparent " />
                                Logout
                            </button>
                        )}
                    </MenuItem>
                </MenuItems>
            </Menu>
        </div >
    );
};

export default JobseekerDropdown;
