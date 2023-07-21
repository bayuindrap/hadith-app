import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hadithAction } from '../redux/actions/hadithAction';
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Box, Button, ButtonGroup, theme } from '@chakra-ui/react'



const HomePage = () => {
    const dispatch = useDispatch()
    const listHadith = useSelector((state) => state.hadith.listHadith)
    const [page, setPage] = useState(1)

    useEffect(() => {
        dispatch(hadithAction())
    }, [dispatch])

    // const printData = () => {
    //     return listHadith.map((value, index) => {
    //         // console.log("value", value.name)
    //         return (
    //             <div key={index}>
    //                 <p style={{color: "black"}}>{value.name}</p>
    //             </div>
    //         );
    //     })
    // }

    // const printData = () => {
    //     return listHadith.map((value, index) => (
    //         <div key={index} className="shadow col-3 mt-1">
    //             <Card  className="shadow p-2 mb-3 " style={{ width: "17vw", borderRadius: 15, height: "17vh", border: "1px solid black" }}>
    //                 <CardBody>
    //                     <p style={{ color: 'black' }}>{value.name}</p>
    //                 </CardBody>
    //             </Card>
    //         </div>
    //     ));
    // };

    const printData = () => {
        // Create an array of 3x3 grid cells
        const gridCells = Array.from(Array(9).keys());

        return (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: "15px" }}>
                {gridCells.map((index) => {
                    if (listHadith[index]) {
                        return (
                            <div key={index} style={{ display: "flex", justifyContent: "center" }}>
                                <Box p="7">
                                    <Link to={`/detail-page/${listHadith[index].id}`} style={{ textDecoration: 'none' }}>
                                        <Button colorScheme='green' size='lg' borderRadius="full" className="hvr-grow" style={{width:"185px"}}>{listHadith[index].name}</Button>
                                    </Link>
                                </Box>
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
        );
    };

    // <Link to={`/detail-page/${listHadith[index].id}`} style={{ textDecoration: 'none' }}>
    //     <p style={{ color: 'black' }}>{listHadith[index].name}</p>
    // </Link>




    return (
        <Box>
            <p style={{ color: "black", textAlign: "center", fontSize: "25px" }}>Hadith App</p>
            <Box pt="10vh">
                {printData()}
            </Box>
        </Box>
    )
}

export default HomePage