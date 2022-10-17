import { useGlobalState } from "../../state"
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { PATH_BACKEND } from "../../constants/constants";
// import deleteItem from "../../General/deleteItem";



export const Basket = () => {
    const itemsInMasket = useGlobalState("itemForBasket");

    const deleteProduct = (event: React.MouseEvent) => {
        const { id } = event.currentTarget as HTMLElement;
        // deleteItem(itemsInMasket[0], id)
    }

    return (
            <div className="basket_container">
            <p>Favorites</p>
            <ul className="basket_list">
                {itemsInMasket[0] && itemsInMasket[0].map((data) => {
                    return <li key={data.id} className="basket_list-item" >
                        <div>
                        <img src={`${PATH_BACKEND}${data.src}`} alt={data.name} width="108" />
                        </div>
                        <div className="basket_info-container">
                            <p>{data.name}</p>
                            <div className='basket_button-container'>
                                <span>$ {data.price}</span>
                                 <button onClick={deleteProduct} className='products-list_button'>
                                <div className={itemsInMasket[0] && itemsInMasket[0].find(elem => elem.id === +data.id) ? "heart--active" : "heart"}></div>
                            </button>
                            </div>
                        </div>
                    </li>
                })}
            </ul>
        </div>
       
    )
}

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// function FormRow() {
//   return (
//     <React.Fragment>
//       <Grid item xs={4}>
//         <Item>Item</Item>
//       </Grid>
//       <Grid item xs={4}>
//         <Item>Item</Item>
//       </Grid>
//       <Grid item xs={4}>
//         <Item>Item</Item>
//       </Grid>
//       <Grid item xs={4}>
//         <Item>Item</Item>
//       </Grid>
//     </React.Fragment>
//   );
// }

export default function BasketGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          <Basket />
        </Grid>
      </Grid>
    </Box>
  );
}