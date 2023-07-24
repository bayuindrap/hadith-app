import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, SimpleGrid, Card, CardHeader, CardBody, Text, Heading, Button, CardFooter } from '@chakra-ui/react'

const AuthorDetail = () => {
    const { id } = useParams();
    const [authorDetail, setauthorDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchauthorDetail = async () => {
            try {
                const response = await fetch(`https://api.hadith.gading.dev/books/${id}?range=1-20`);
                // console.log("testing", response.data)
                if (!response.ok) {
                    throw new Error('Failed to fetch product detail');
                }
                const data = await response.json();
                console.log("testing", data.data.hadiths);
                setauthorDetail(data.data.hadiths);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchauthorDetail();
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    // const printData = () => {
    //     return authorDetail.map((value, index) => {
    //         // return <div>
    //         //     <h3>{value.number}</h3>
    //         //     <h3>{value.arab}</h3>
    //         //     <h3>{value.id}</h3>
    //         // </div>
    //         return <Box>
    //             <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
    //                 <Card>
    //                     <CardHeader>
    //                         <Heading size='md'>{value.arab}</Heading>
    //                     </CardHeader>
    //                     <CardBody>
    //                         <Text>{value.id}</Text>
    //                     </CardBody>
    //                     {/* <CardFooter>
    //                         <Button>View here</Button>
    //                     </CardFooter> */}
    //                 </Card>
    //             </SimpleGrid>
    //         </Box>
    //     })
    // }

    const printData = () => {
        return (
          <SimpleGrid spacing={4} templateColumns='repeat(3, 1fr)'>
            {authorDetail.map((value, index) => (
              <Box key={index}>
                <Card>
                  <CardHeader>
                    <Heading size='md'>{value.arab}</Heading>
                  </CardHeader>
                  <CardBody>
                    <Text>{value.id}</Text>
                  </CardBody>
                  <CardFooter>
                    <Button>View more..</Button>
                  </CardFooter>
                </Card>
              </Box>
            ))}
          </SimpleGrid>
        );
      };
      

    return (
        <div>
            <h2 style={{ color: "black" }}>Detail</h2>
            <p style={{ color: "black" }}>Author Name: {id}</p>
            {authorDetail && (
                <div style={{ color: "black" }}>
                    {/* <h3 style={{color: "black"}}>{authorDetail.arab}</h3>
                    <p style={{color: "black"}}>{authorDetail.description}</p> */}
                    {printData()}
                    {/* Add code to display other product details */}
                </div>
            )}
        </div>
    )
}

export default AuthorDetail;