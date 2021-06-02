import useFetch from "./useFetch";
import { useParams } from "react-router";
import {React} from 'react';

const ShowData = () => {
    const { id } = useParams();
    const { data: registerDetails, isPending, error}  = useFetch('http://localhost:8000/slotDetails/' + id);
    const handleClick = () => {
        fetch('http://localhost:8000/slotDetails' + registerDetails.id, {
            method: 'DELETE'
        })
        return (
            <div className="slot-details">
                {isPending && <div>Loading...</div>}
                {error && <div>{error}</div>}
                {blog && (
                    <article>
                        
                        <button onClick={handleClick}>Delete</button>
                    </article>
                )}
            </div>
        );
    }
}
export default ShowData;