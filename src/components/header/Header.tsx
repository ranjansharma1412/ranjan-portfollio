import { ShoppingBag } from 'lucide-react';
import { useState } from "react";
import { NavLink } from "react-router";
import SearchField from "../searchField/SearchField";

const Header = () => {
    const [searchText, setSearchText] = useState('')

    return (
        <div className="sticky top-0 z-50 w-full bg-white h-16 shadow-xs content-center">
            <div className="flex flex-row justify-between content-center">
                <div className="px-5">

                </div>
                <div className="flex flex-row px-10 gap-6 items-center">
                    <div>
                        <select
                            value={""}
                            onChange={(e) => { }}
                            className="focus:outline-none"
                        >
                            <option value="india">India</option>
                            <option value="usa">USA</option>
                            <option value="uk">UK</option>
                        </select>
                    </div>
                    <NavLink to={"settings"} style={{ color: 'black', fontWeight: 'unset' }}>On Sale</NavLink>
                    <NavLink to={"settings"} style={{ color: 'black', fontWeight: 'unset' }}>New Arival</NavLink>
                    <NavLink to={"settings"} style={{ color: 'black', fontWeight: 'unset' }}>Brands</NavLink>
                </div>
                <div className="w-2xs content-center">
                    <SearchField onTextChange={setSearchText} />
                </div>

                <div className="px-5 flex flex-row items-center">
                    <ShoppingBag className="mr-5" />
                    <img src="https://picsum.photos/200/300" className="h-12 w-12 rounded-full outline-1 outline-cyan-200" />
                </div>
            </div>
        </div>
    )
}

export default Header