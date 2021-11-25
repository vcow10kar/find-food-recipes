import { Alert, Button, TextField } from '@mui/material';
import styles from './search.module.css';
import RecipeCard from '../Recipe/RecipeCard';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Search() {
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        setRecipes([]);

        let data = new FormData(e.target);

        let name = data.get("recipe-name");

        axios({
            url: `${process.env.REACT_APP_BASE_URL}/search.php?s=${name}`,
            method: 'get'
        })
            .then((res) => {

                if (res.data.meals === null) {
                    setError("Search results: 0");
                } else {
                    setError(null);
                    setRecipes([...res.data.meals]);

                }
            })
            .catch(err => {
                console.log("Error:", err);
            })
    }

    useEffect(() => {
        setRecipes([]);
    }, []);
    return (
        <div className={styles.searchPage}>
            <form onSubmit={handleSubmit}>
                <div className={styles.search} >
                    <TextField name="recipe-name" placeholder="Enter Recipe Name..." />
                    <Button disableElevation type="submit" variant="contained">Search</Button>
                </div>

                <div className = {styles.alert}>
                    {error ? <Alert severity="error">{error}</Alert> : null}
                </div>
            </form>

            {recipes.length > 0 ?

                <div className={styles.searchResults}>
                    {recipes.map(item => {
                        return <RecipeCard data={item} />
                    })}
                </div>

                : null}

        </div>
    )
}

export default Search;