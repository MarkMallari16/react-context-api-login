import React, { useState } from 'react'

const useSideBar = () => {
    const [isSideBarExpand, setIsSideBarExpand] = useState(false);
    const handleSideBarExpand = () => {
        setIsSideBarExpand(!isSideBarExpand);
    }

    return { isSideBarExpand, handleSideBarExpand };
}

export default useSideBar