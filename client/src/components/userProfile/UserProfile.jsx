import styles from './UserProfile.module.css'
import { useUserProfile } from '../../apiHooks/authApiHooks';
import { useUserMovies } from '../../apiHooks/movieApiHooks';
import MovieCatalogItem from '../catalog/movieCatalogItem/MovieCatalogItem';

export default function UserProfile() {
const { userProfile } = useUserProfile();
const { userMovies } = useUserMovies();

    return (
<>   

<section className={styles.profileContainer}>
    <div className={styles.profileCard}>
    <img src="\images\alison-wang-mou0S7ViElQ-unsplash.jpg" alt="ProfilePicture" />
    <div className={styles.userDetails}>
        <p>My username:</p>
        <h2>{userProfile.username}</h2>
        <p>My contact information:</p>
        <h3>{userProfile.email}</h3>
    </div>
    </div>
</section>

<section className={styles.userCatalogPage}>
    <h1>My Uploaded Movies</h1>
    <div className={styles.movies}>
    {userMovies.map(userMovie => <MovieCatalogItem key={userMovie._id} {...userMovie} />)}
    </div>

   <div className={styles.noMovies}>
    {userMovies.length === 0 && <h3 className={styles.noMovies}>No Movies yet!</h3>}
   </div>

</section>

</>
    )
}