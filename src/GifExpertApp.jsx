import {useState} from 'react'
import {AddCategory, GifGrid} from './components';

export const GifExpertApp = () => {
  
    
    const [categories, setCategories] = useState(['hunterxhunter']);

    const handleAddElement = (value)=>{
        
        if(categories.find(objCat=>objCat.toUpperCase() === value.toUpperCase())) return; 
        
        setCategories([...categories, value]);
    };

    return( 
        <>
            <h1>GifExpertApp</h1>
            
            <AddCategory newCategory={(value)=>handleAddElement(value)}/>
           
            {
                categories.map((obj)=>
                                        
                    <GifGrid key={obj}  category={obj} />
                    
                )
            }
           
        </>
    )
}
