import React, { useState } from 'react'

function Index() {
const [array, setarray] = useState(['Alok Gahlot'])
    const autoTyping = ()=>{



        return "Alok Gahlot"
    }

    return (
        <div>
            {autoTyping()}
        </div>
    )
}

export default Index
