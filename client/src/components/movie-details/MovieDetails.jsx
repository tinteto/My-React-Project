//TODO Edit details information, comments section
import styles from './MovieDetails.module.css';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import { UserContext } from '../../contexts/userContext';
import { useDeleteMovie, useOneMovie } from '../../apiHooks/movieApiHooks';
import { toast } from 'react-toastify';
import MovieComments from '../comments/MovieComments';
import CreateComment from '../create-comment/CreateComment';


export default function MovieDetails() {
    const redirectTo = useNavigate();
    const { movieId } = useParams();
    const { movie } = useOneMovie(movieId);
    const { email, _id: userId } = useContext(UserContext);
    const { deleteMovie } = useDeleteMovie();


    const movieDeleteClickHandler = async () => {
    const isApproved = confirm(`Are you sure you want to delete ${movie.title} movie?`);

    if(!isApproved) {
        return;
    }

    
    try {
        await deleteMovie(movieId);
        toast.success('Movie deleted successfully!')
    
        redirectTo('/catalog');
    } catch (error) {
        toast.error(error.message);
    }
    };


    return(
        <>
    <div className={styles.movieContainer}>
        <div className={styles.movieDetails}>
            <img src={movie.img} alt="Movie Poster" />
            <div className={styles.text}>
                <h1>{movie.title}</h1>
                <h4 className={styles.date}>Release Date: {movie.releaseDate}</h4>
                <h2>Creators: {movie.creators}</h2>
                <h2>Stars: {movie.stars}</h2>
                <p>{movie.description}</p>
               
                
                <div className={styles.btnContainer}>
                    {userId === movie._ownerId
                    ? 
                    ( 
                    <>
                    <Link to={`/catalog/${movieId}/edit`} className={styles.btnEdit}>Edit</Link>
                    <Link onClick={movieDeleteClickHandler} className={styles.btnDelete}>Delete</Link>
                    </> 
                    )
                    : 
                    null
                    }
       
                </div>
            </div>
        </div>
    </div>

    <MovieComments />

    <CreateComment 
    email={email}
    movieId={movieId}/>
        </>
    )
}