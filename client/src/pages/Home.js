import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { holder } from '../utils/queries';

const Home = () => {
    const { loading, data } = useQuery(holder, {
        fetchPolicy: "no-cache"
    });





};

export default Home;