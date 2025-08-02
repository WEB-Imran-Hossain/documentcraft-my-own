import React from 'react'

const Sidebar = ({ docs }) => {
    const roots = docs.filter((doc) => !doc.parent);
    console.log({ roots });

    const nonRoots = Object.groupBy(
        docs.filter((doc) => doc.parent),
        ({ parent }) => parent
    );
    console.log({ nonRoots });

    return (
        <div>Sidebar</div>
    )
}

export default Sidebar