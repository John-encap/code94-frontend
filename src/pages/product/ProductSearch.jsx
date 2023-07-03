import React , {useState , useEffect}from "react";
import Layout from "../../components/layout/main/Layout";
import Table from "../../components/common/table/Table";
import TableBody from "../../components/common/table/TableBody";
import ToolBar from "../../components/common/toolbar/ToolBar";
import SearchResultCard from "../../components/common/SearchResultCard";

const ProductSearch = () => {
  
    const [fav,setFav] = useState(true)
    useEffect(() => {
      setFav(true)
    });
    return (
      <Layout title={'PRODUCTS'}>
        <ToolBar></ToolBar>
        <h5 className='font-semibold text-darkGray ml-10'>4 results found for 'Books'</h5>
        <Table>
          <TableBody>
            <SearchResultCard/>
            <SearchResultCard/>
            <SearchResultCard/>
            <SearchResultCard/>
          </TableBody>
        </Table>
      </Layout>
    );
  };
  
  export default ProductSearch;