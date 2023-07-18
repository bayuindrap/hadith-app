import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hadithAction } from '../redux/actions/hadithAction';
import { Card, CardBody } from 'reactstrap';


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
                                <div>
                                    <Card
                                        style={{
                                            width: "12vw",
                                            borderRadius: 15,
                                            height: "12vh",
                                            border: "1px solid black"
                                        }}
                                    >
                                        <CardBody>
                                            <p style={{ color: "black" }}>{listHadith[index].name}</p>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>
                        );
                    } else {
                        return null; // Render null if the element is undefined
                    }
                })}
            </div>
        );
    };





    return (
        <div className="col" style={{ color: "black" }}>
            <h2 style={{ color: "black", textAlign: "center" }}>H O M E P A G E</h2>
            <div>
                {printData()}
            </div>
        </div>
    )
}

export default HomePage