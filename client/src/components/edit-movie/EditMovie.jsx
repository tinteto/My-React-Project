import styles from './EditMovie.module.css'

import { Link, Navigate, useNavigate, useParams } from 'react-router'
import { useEditMovie, useOneMovie } from '../../apiHooks/movieApiHooks'
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { UserContext } from '../../contexts/userContext';

export default function EditMovie() {
const redirectTo = useNavigate();
const { movieId } = useParams();
const { movie } = useOneMovie(movieId);
const { editMovie } = useEditMovie();
const { _id: userId } = useContext(UserContext);

const onFormEdit = async (formData) => {
    const movieData = Object.fromEntries(formData);

if( movieData.title === '' || 
    movieData.releaseDate === '' || 
    movieData.director === '' || 
    movieData.img === '' || 
    movieData.description === '') {
    toast.warning('Missing fields!');

 return;
}


try {
    await editMovie(movieId, movieData);
    toast.success('Movie edited successfully!');

    redirectTo(`/catalog/${movieId}/details`);
} catch (error) {
    toast.error(error.message);
}
};

if (userId !== movie._ownerId) {
    return <Navigate to="/catalog" />
}

return(
<>
<div className={styles.container}>

    <form action={onFormEdit}>
    <div className="title">
        <label htmlFor="title">Movie Title:</label>
        <input type="text"  id="title" name="title" defaultValue={movie.title}/>
    </div>

    <div className="releaseDate">
        <label htmlFor="releaseDate">Release Date:</label>
        <input type="text"  id="releaseDate" name="releaseDate" defaultValue={movie.releaseDate}/>
    </div>
    <div className="creators">
        <label htmlFor="creators">Creators:</label>
        <input type="text"  id="creators" name="creators" defaultValue={movie.creators} />
    </div>

    <div className="stars">
        <label htmlFor="stars">Stars:</label>
        <input type="text"  id="stars" name="stars" defaultValue={movie.stars} />
    </div>

    <div className="img">
        <label>Image: <input type="text" id="img" name="img" defaultValue={movie.img} /></label>
    </div>
 

    <div className="description">
        <label htmlFor="description">Description:</label>
        <textarea 
        type="text" 
        name="description" 
        id="description" 
        rows="5"
        defaultValue={movie.description}
        ></textarea>
    </div>

    <div className="editMovieButtons">
        <button  type="submit" className={styles.edit}>Edit Movie</button> 
        <Link to={`/catalog/${movieId}/details`} className={styles.goBack}>Go Back</Link>
    </div>

    </form>
</div>
</>
    )
}