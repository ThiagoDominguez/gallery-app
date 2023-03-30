import { useFetch } from "../hooks/useFetch";
import Card from "./Card";
import Form from "./Form";
import Spinner from "./Spinner";

const Cards = () => {
    const [images, loading, handleSubmit] = useFetch();

    return (
        <div className="text-center  container-xxl-16   container-xl-14 container-lg-12 container-md-10 container-sm-6 ">
            <Form handleSubmit={handleSubmit} />
            {loading && <Spinner />}
            <div className="row">
                {images.map((img) => {
                    return (
                        <div key={img.id} className="col">
                            <Card img={img.urls.regular} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Cards;
