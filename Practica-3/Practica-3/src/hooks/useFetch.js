import { useEffect, useState } from "react"

export const useFetch =  (value) => {


    const [characterData, setCharacterData] = useState({
        name: "",
        gender: "",
        age: "",
        occupation: "",
    });



    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect( ()=>{
        const getData = async () => {
            setIsLoading(true);
            setHasError(false);
            try {
                const url = "https://thesimpsonsapi.com/api"
                const response = await fetch(`${url}/characters/${value}`);
                

                const data = await response.json();
                // setName(data.name);
                // setGender(data.gender);
                setCharacterData({
                    name: data.name,
                    gender: data.gender,
                    age: data.age,
                    occupation: data.occupation,
                })
            } catch (error) {
                console.error(error);
                setHasError(true);
            } finally {
                setIsLoading(false);
            }
        }
        getData();
    },[value]) 
    
    return{
        characterData,
        isLoading,
        hasError
    }
}
