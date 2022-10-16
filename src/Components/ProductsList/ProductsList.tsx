import { FixedSizeGrid as Grid } from 'react-window';
import AutoSizer from "react-virtualized-auto-sizer";
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import IProduct from "../../Interfaces/Product.interface"
import { setGlobalState, useGlobalState } from '../../state';
import { useNavigate } from 'react-router-dom';

const PATH = "https://testbackend.nc-one.com"

// interface Props {
//     products?: IProduct[] | null,
//     style?: any
// }

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

// export default function NestedGrid() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={1}>
//         <Grid container item spacing={3}>
//           <ProductsItem />
//         </Grid>
//         <Grid container item spacing={3}>
//           <FormRow />
//         </Grid>
//         <Grid container item spacing={3}>
//           <FormRow />
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }
export const ProductsItem = () => {
    const products = useGlobalState("items");
    const items = useGlobalState("itemForBasket");
    const navigate = useNavigate();

    const handleClick = (event: React.MouseEvent) => {
        const { id } = event.currentTarget as HTMLElement;
        const { nodeName } = event.target as HTMLElement;
        if (nodeName === "DIV" || nodeName === "BUTTON") {
            
            const saveBasket = products[0]!.find(el => el.id === +id);
            if (!items[0]) {
                setGlobalState("itemForBasket", [saveBasket!])
                return;
            }
            const findRepeatItem = items[0].find(element => element.id === +id);
            if (findRepeatItem) {
                const deleteActiveId = items[0].filter(e => e.id !== +id);
                setGlobalState("itemForBasket", deleteActiveId)
                return;
            }            
            setGlobalState("itemForBasket", [...items[0], saveBasket!])           
            return;
        }
        navigate(`/NC-product-test/${id}`)

    }

    return (
        <ul  className="products-list_List" >
            {products[0] && products[0].map(({ name, id, src, price }) => {
                return <li onClick={handleClick} className="products-list_item" key={id} id={String(id)} >
                        <img src={`${PATH}${src}`} alt={name} width="232"  />
                        <p>{name}</p>
                        <div className='products-list_button-container'>
                           <p>$ {price}</p>
                            <button id="button" className='products-list_button'>
                                <div className={items[0] && items[0].find(elem => elem.id === +id) ? "heart--active" : "heart"}></div>
                            </button>
                        </div>
                </li>

            })}
        </ul>
    )
}


export const ProductsList = () => {
    return (
        <AutoSizer>
            {({ height, width }) => (
                 <Grid
                    className="Grid"
                    columnCount={4}
                    columnWidth={262}
                    height={height}
                    rowCount={1000}
                    rowHeight={20}
                    width={width}
                >
                    {ProductsItem}
                </Grid>
            )}
        </AutoSizer>
               
    )
}

