import Favorites from "../../components/favorites/Favorites";
import MyFavorites from "../../components/myFavorites/MyFavorites";
import Newsletter from "../../components/newsletter/Newsletter";
import PageHeader from "../../components/pageHeader/PageHeader";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import useFetchById from "../../hooks/useFetchById";

const Home = () => {
  const { product } = useFetchById(2);

  return (
    <section>
      <PageHeader
        title='PÆNE PRODUKTER'
        headerImg={product?.images[0]}
        subTitle='Her kan du se alle vores pæne produkter!'
      />
      <SectionHeader
        lineOne='Brugernes'
        lineTwo='Favoritter'
        colorLineOne='green'
      />
      <Favorites />
      <SectionHeader lineOne='Mine' lineTwo='Favoritter' colorLineTwo='green' />
      <MyFavorites />
      <SectionHeader title='Tilmeld dig vores nyhedsbrev' />
      <Newsletter />
    </section>
  );
};

export default Home;
