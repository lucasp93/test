import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GitGrid } from './components/GitGrid';

export const GifExpertApp = () => {

    //const categories = ['a', 'b', 'c', 'd'];
    //const [categories, setCategories] = useState(['a', 'b', 'c', 'd'])

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     setCategories( [...categories, 'test'] );
    //     //setCategories( cats => [...categories, 'test'] );
    // }

    return(
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCategories={ setCategories } />

            <hr />

            <ol>
                {
                    categories.map( category  => (
                        <GitGrid 
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>
        </>
    )
}

//rafc para crear el init
//http-server -o
//seccion 8