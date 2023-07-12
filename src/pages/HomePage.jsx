import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hadithAction } from '../redux/actions/hadithAction';
import { Card, CardBody } from 'reactstrap';


const HomePage = () => {
    const dispatch = useDispatch()
    const listHadith = useSelector((state) => state.hadith.listHadith)

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

    const printData = () => {
        return listHadith.map((value, index) => (
            <div key={index} className=" shadow col-3 mt-1 hvr-grow">
                <Card className="shadow p-2 mb-3 bg-white">
                    <CardBody>
                        <p style={{ color: 'black' }}>{value.name}</p>
                    </CardBody>
                </Card>
            </div>
        ));
    };

    return (
        <div style={{ color: "black" }}>
            <h1 style={{ color: "black" }}>H O M E P A G E</h1>
            <div className="row col-10">
                {printData()}
            </div>
        </div>
    )
}

export default HomePage