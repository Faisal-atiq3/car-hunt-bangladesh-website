import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Card, CardActions, CardContent, Container } from '@mui/material';
import Button from '@restart/ui/esm/Button';
import Service from '../Service/Service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt,  } from '@fortawesome/free-solid-svg-icons';
import { faStar as star } from '@fortawesome/free-regular-svg-icons'


const Review = () => {
    const [review, setReview] = useState([])
   

    useEffect(()=>{
        fetch('https://pure-escarpment-37215.herokuapp.com/review')
        .then(res=>res.json())
        .then(data=>setReview(data));
    },[])
    console.log(review)


   

    return (
       
            <>
              <h1 style ={{textAlign:'center'}}> Review</h1>
        {/* {review.map(data =>
          
        )} */}





<div class="row row-cols-1 row-cols-md-3 g-4">

  {
      review.map(data=>
        <div class="col">
    <div class="card">
      
      <div class="card-body">
        <h5 class="card-title"> Name :{data?.clientName}</h5>
        <p class="card-text"> Review :{data?.review}</p>
        <p class="card-text"> Rating : {data?.rating}</p>
      </div>
    </div>
    <div>
    
    {
                                    data?.rating == 1 &&
                                    <div className=''>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={star} />
                                            <FontAwesomeIcon icon={star} />
                                            <FontAwesomeIcon icon={star} />
                                            <FontAwesomeIcon icon={star} />
                                        </span>
                                        <span>{data?.rating}</span>
                                    </div>
                                }

                                {
                                    data?.rating > 1 && data?.rating <= 1.9 &&
                                    <div className=''>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStarHalfAlt} />
                                            <FontAwesomeIcon icon={star} />
                                            <FontAwesomeIcon icon={star} />
                                            <FontAwesomeIcon icon={star} />
                                        </span>
                                        <span>{data?.rating}</span>
                                    </div>
                                }
                                {
                                    data?.rating == 2 &&
                                    <div className=''>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={star} />
                                            <FontAwesomeIcon icon={star} />
                                            <FontAwesomeIcon icon={star} />
                                        </span>
                                        <span>{data?.rating}</span>
                                    </div>
                                }
                                {
                                   data?.rating > 2 && data?.rating <= 2.9 &&
                                    <div className=''>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStarHalfAlt} />
                                            <FontAwesomeIcon icon={star} />
                                            <FontAwesomeIcon icon={star} />
                                        </span>
                                        <span>{data?.rating}</span>
                                    </div>
                                }
                                {
                                    data?.rating == 3 &&
                                    <div className=''>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={star} />
                                            <FontAwesomeIcon icon={star} />
                                        </span>
                                        <span>{data?.rating}</span>
                                    </div>
                                }
                                {
                                    data?.rating > 3 && data?.rating <= 3.9 &&
                                    <div className=''>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStarHalfAlt} />
                                            <FontAwesomeIcon icon={star} />
                                        </span>
                                        <span>{data?.rating}</span>
                                    </div>
                                }
                                {
                                     data?.rating == 4 && 
                                    <div className=''>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={star} />
                                        </span>
                                        <span>{data?.rating}</span>
                                    </div>
                                }
                                {
                                    data?.rating> 4 && data?.rating <= 4.9 &&
                                    <div className=''>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStarHalfAlt} />
                                        </span>
                                        <span>{data?.rating}</span>
                                    </div>
                                }
                                {
                                    data?.rating == 5 &&
                                    <div className=''>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span>{data?.rating}</span>
                                    </div>
                                }





    </div>
  </div>
    

    




        )

  }
</div>







            </>



    );
};

export default Review;


