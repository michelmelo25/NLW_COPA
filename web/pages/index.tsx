interface HomeProps {
  count: number;
}

export default function Home(props: HomeProps) {

  return (
   <h1>Constagem: {props.count}</h1>
  )
}


export const getServerSideProps = async () => {
    const respopnse = await fetch('http://localhost:3333/pools/count')
    const data = await respopnse.json()

    console.log(data);

    return{
      props: {
        count: data.count,
      }
    }
}