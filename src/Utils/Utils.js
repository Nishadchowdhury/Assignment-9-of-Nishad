import { useEffect, useState } from "react"

const useCartData =() =>{

    const [reviews , setReviews] = useState([]);

    useEffect(()=>{
        fetch('generated-reviwe.json')
        .then(res => res.json())
        .then(data => {
            setReviews(data);
        })
    },[])

    return [reviews , setReviews];

}

export default useCartData;