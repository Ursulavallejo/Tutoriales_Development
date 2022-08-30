import Axios from "axios"

const CoinList = ({coinData}) => {
        console.log(coinData)
        return <div> {coinData.coins.map((coin) => {
               return <div>
                       <h1>{coin.name}</h1>
                       <img src={coin.icon} alt="coinImage"/>
                       <p>{coin.price}</p>
               </div>
        })}</div>
}

export const getStaticProps = async ({ params}) => {
 const id = params;
        const data = await Axios.get("https://api.coinstats.app/public/v1/coins?skip=0")

        return {
                props: {
                      coinData:data.data
                },
                revalidate:10,
        }
}

/*export const getServerSideProps = async ({ params}) => {
 const id = params;
        const data = await Axios.get("https://api.coinstats.app/public/v1/coins?skip=0")

        return {
                props: {
                      coinData:data.data
                }
        }
}*/

export default CoinList