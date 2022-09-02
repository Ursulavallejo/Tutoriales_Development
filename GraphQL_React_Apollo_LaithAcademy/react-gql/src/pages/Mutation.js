import {gql, useMutation} from "@apollo/client"


// IS A DEMO ONLY!! Actually do not work as the Morthy page do not support Mutations.

    const CREATE_PRODUCT = gql`
mutation CreateProduct($name: String!, $quantityPerUnit: Int! ){
  createProduct(record:{
    name: $name,
    quantityPerUnit: $quantityPerUnit,
  }){
    record{
      name
    }
  }
}
`


const Mutation = () => {

    const [createProduct, {data, loading, error}] = useMutation(CREATE_PRODUCT, {
        variables: {
            name: "hotdog",
            quantityPerUnit: 4
        }
    })

    return (
        <>
            <button onClick={()=> createProduct()}></button>
            
        </>
    );
};

export default Mutation;