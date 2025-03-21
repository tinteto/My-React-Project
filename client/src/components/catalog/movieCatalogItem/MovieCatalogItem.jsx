//!Do not forget to pass params as object
import { Link } from "react-router";

export default function MovieCatalogItem({_id, title, description, img, _createdOn}) {
    return (
    <> 
    <div className="allMovies">
    <div className="movieCard" >
        <img className="imgCard" src={img} alt="MovieImg" />
        <h4>{title}</h4>
        <p className="date">{_createdOn}</p>
        <p className="description">{description}</p>
        <p><Link className="cardButton" to={`/catalog/${_id}/details`}>Movie Details</Link></p> 
    </div>
    </div>

{/* <article className="relative overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
  <img
    alt=""
    src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
    className="absolute inset-0 h-full w-full object-cover"
  />

  <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
    <div className="p-4 sm:p-6">
      <time datetime="2022-10-10" className="block text-xs text-white/90"> 10th Oct 2022 </time>

      <a href="#">
        <h3 className="mt-0.5 text-lg text-white">How to position your furniture for positivity</h3>
      </a>

      <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
        pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
        quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
        atque dignissimos. Molestias explicabo corporis voluptatem?
      </p>
    </div>
  </div>
</article> 


<a href="#" className="group relative block">
  <div className="relative h-[350px] sm:h-[450px]">
    <img
      src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
    />

    <img
      src="https://images.unsplash.com/photo-1593795899630-b6033c0fa58d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
    />
  </div>

  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
    <h3 className="text-xl font-medium text-white">Skinny Jeans Blue</h3>

    <p className="mt-1.5 text-pretty text-xs text-white">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi dicta impedit
      aperiam ipsum!
    </p>

    <span
      className="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
    >
      Shop Now
    </span>
  </div>
</a>
*/}
</>
    )
}