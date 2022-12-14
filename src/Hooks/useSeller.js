import React, { useEffect, useState } from 'react';

const useSeller = (email) => {
    const [isSeller, setIsSeller] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        if(email){
            fetch(`https://sell-zone-server.vercel.app/user/seller/${email}`)
            .then(res => res.json())
            .then(data => {
                
                setIsSeller(data);
                setIsLoading(false);
                console.log(data);
            })
        }
    },[email])

    return [isSeller , isLoading];
};

export default useSeller;